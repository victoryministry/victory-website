export const listMerger = (acc: any, curr: any) => {
  if (
    curr.type === 'bulleted_list_item' ||
    curr.type === 'numbered_list_item'
  ) {
    if (!acc[acc.length - 1].length) {
      return [...acc, [curr]]
    } else {
      return [...acc.slice(0, -1), [...acc[acc.length - 1], curr]]
    }
  } else {
    return [...acc, curr]
  }
}
