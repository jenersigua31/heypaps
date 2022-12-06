export interface iListItem { 
    id: number, 
    title: string[], 
    subTitle: string[],
    image?: string
}

export interface iGroupLabel {
    text: string,
    icon?: string
}


export interface iGroupListItem {
    id: string,
    labelLeft:iGroupLabel,
    labelRight?:iGroupLabel,
    list: iListItem[]
}