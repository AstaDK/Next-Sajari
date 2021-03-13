import { Pipeline, SearchProvider, Variables } from "@sajari/react-hooks";
import { useState } from "react";
import { pipelineConfig } from "../../config";
import ItemComponent from "../items";

const HomeComponent = () => {
  const [listViews, setListViews] = useState([
    {
      name: "Asta",
      isRender: true,
      text: "SanDisk",
    },
    {
      name: "Nick",
      isRender: true,
      text: "HP",
    },
    {
      name: "Deku",
      isRender: true,
      text: "Apple",
    },
  ]);

  return (
    <div className="space-y-6">
      {listViews &&
        listViews
          .filter((i) => i.isRender)
          .map((item, index) => {
            return (
              <SearchProvider
                key={`${index}-${item.name}`}
                search={{
                  variables: new Variables({
                    resultsPerPage: 6,
                    q: ``,
                    filter: `brand = "${item.text}"`,
                  }),
                  pipeline: pipelineConfig(),
                }}
                searchOnLoad={true}
              >
                <ItemComponent
                  listViews={listViews}
                  setListViews={setListViews}
                  item={item}
                />
              </SearchProvider>
            );
          })}
    </div>
  );
};
export default HomeComponent;
