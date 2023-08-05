export interface ICategories {
  category_info: CategoryInfo[];
}

export interface ISearchCategories extends ICategories {
  has_more: boolean;
};

interface CategoryInfo {
  id: string;
  name: string;
  short_name: string;
  icon_url: string;
  desc: string;
}
