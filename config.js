import {
  Pipeline,
  RangeFilterBuilder,
  Variables,
} from "@sajari/react-search-ui";

export const pipelineConfig = () => {
  let object = {
    account: "1606874199975641114",
    collection: "best-buy",
  };

  if (typeof window === "undefined") {
    object = {
      account: "1606874199975641114",
      collection: "best-buy",
    };
  }
  return new Pipeline(
    {
      ...object,
    },
    "query"
  );
};

export const variablesConfig = () =>
  new Variables({
    resultsPerPage: 6,
    q: "",
  });

export const priceFilter = new RangeFilterBuilder({
  name: "price",
  field: "price",
});
