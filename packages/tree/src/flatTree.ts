import type { INavItem } from '@flow/reader/models'

export const flatTree = (toc: readonly INavItem[]): INavItem[] => {
  const mapItem = (item: INavItem): INavItem => ({
    id: item.id,
    label: item.label,
    href: item.href,
    subitems: item.subitems?.map(mapItem) ?? [],
    parent: item.parent,
    depth: item.depth,
    expanded: item.expanded ?? false,
  })

  return toc.map(mapItem)
}
