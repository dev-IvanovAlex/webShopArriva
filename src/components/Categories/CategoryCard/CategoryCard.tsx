import { FC, useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPagProducts,
  Product,
} from "../../../store/features/productsSlice";

import CardProducts from "../../Main/CardProducts/CardProducts";

type Props = {
  category: string;
};
type ParamsType = {
  categ: string;
  limit: number;
  offset: number;
};

const CategoryCard: FC<Props> = ({ category }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { pagProducts, isPagLoading } = useSelector(
    (state: RootState) => state.products
  );

  const defaultParams: ParamsType = {
    categ: category,
    limit: 5,
    offset: 0,
  };
  const [params, setParams] = useState<ParamsType>(defaultParams);
  const [items, setItems] = useState<Product[]>([]);
  const [isEnd, setEnd] = useState(false);
  const [sortType, setSortType] = useState("relevant");
  const [sortedItems, setSortedItems] = useState<Product[]>([]);

  const sortProducts = () => {
    let itemsCopy = [...items];
    if (sortType === "low-high") {
      setSortedItems(itemsCopy.sort((a, b) => a.price - b.price));
    } else if (sortType === "high-low") {
      setSortedItems(itemsCopy.sort((a, b) => b.price - a.price));
    } else if (sortType === "relevant") {
      setSortedItems(itemsCopy);
    }
    itemsCopy = [];
  };

  useEffect(() => {
    dispatch(fetchPagProducts(params));
  }, [dispatch, params]);

  useEffect(() => {
    if (isPagLoading) return;
    if (!pagProducts.length || pagProducts.length < defaultParams.limit)
      setEnd(true);
    setItems((prev) => [...prev, ...pagProducts]);
  }, [pagProducts, isPagLoading]);

  useEffect(() => {
    if (isPagLoading) return;
    sortProducts();
  }, [items]);

  useEffect(() => {
    if (!items.length) return;
    sortProducts();
  }, [sortType, params]);

  useEffect(() => {
    setItems([]);
    setEnd(false);
  }, []);
  return (
    <section className="px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] mt-[30px]">
      <div className="flex justify-between">
        <div className="flex items-baseline gap-x-3 flex-wrap">
          <h3 className="font-semibold text-[38px] leading-[38px]">
            {category}
          </h3>
          <p className="text-center">
            Количество товаров:
            {typeof items === "undefined" ? " 0" : ` ${items.length}`}
          </p>
        </div>

        <div className="flex gap-x-4 cursor-pointer flex-wrap justify-center rounded-[5px]">
          <button className="text-black  cursor-pointer ">Сортировка:</button>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="w-[155px] bg-zinc-100 rounded-[5px]"
            name=""
            id=""
          >
            <option value="relevant">Релевантная</option>
            <option value="low-high">По возрастанию</option>
            <option value="high-low">По убыванию</option>
          </select>
        </div>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-[32px] gap-[10px] ">
        {sortedItems.map((product: Product) => {
          return <CardProducts product={product} />;
        })}
      </div>
      {!isEnd ? (
        <div className="text-center mt-5">
          <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
            className="text-white bg-zinc-600 px-3 py-2 rounded-[8px] cursor-pointer"
          >
            Показать ещё
          </button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default CategoryCard;
