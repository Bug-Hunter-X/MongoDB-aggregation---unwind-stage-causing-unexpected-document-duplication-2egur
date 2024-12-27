```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedData",
    },
  },
  {
    $group: {
      _id: "$_id",
      relatedData: { $push: "$relatedData" },
    }
  }
];

//This corrected query uses $group before $unwind to ensure that documents are correctly grouped by their original _id values
//This eliminates the duplication problem caused by the original query.
//Correct Aggregation Results
```