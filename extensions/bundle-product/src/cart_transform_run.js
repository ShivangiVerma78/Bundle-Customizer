export function cartTransformRun(input) {
  const groupedItems = {};

  (input?.cart?.lines ?? []).forEach((line) => {
    const bundleId = line.bundleId;
    if (bundleId) {
      if (!groupedItems[bundleId]) {
        groupedItems[bundleId] = [];
      }
      groupedItems[bundleId].push({ id: line.id, quantity: line.quantity });
    }
  });

  const operations = Object.values(groupedItems).map((group) => ({
    linesMerge: {
      cartLines: group.map((line) => ({
        cartLineId: line.id,
        quantity: line.quantity,
      })),
      parentVariantId: 'gid://shopify/ProductVariant/47814442647706',
    },
  }));

  return { operations };
}