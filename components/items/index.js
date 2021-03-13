import { usePagination, useSearchContext } from "@sajari/react-hooks";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const ItemComponent = ({ item, listViews, setListViews }) => {
  const { results, searching } = useSearchContext();
  const { page, setPage } = usePagination();

  const showMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!results) return;
    if (Array.isArray(results)) {
      const newListViews = listViews.map((i) => {
        if (i.name === item.name) {
          return {
            ...item,
            isRender: true,
          };
        } else {
          return {
            ...item,
            isRender: false,
          };
        }
      });
      setListViews(newListViews);
    }
  }, [results]);

  console.log("searching", searching);
  console.log("results", results);
  return (
    <div>
      {searching && <>loading......</>}
      <h3>{item.name || ""}</h3>
      {results &&
        results.map((item, index) => {
          return <div key={index}>{item?.values?.name || ""}</div>;
        })}
      <Button onClick={showMore}>Show More</Button>
    </div>
  );
};
export default ItemComponent;
