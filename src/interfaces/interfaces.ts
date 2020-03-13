export interface IDownload{
    url: string
    id: number
}
export interface DownloadFormProps {
    onAdd(url: string): void
}
export interface ImagesListProps {
    downloads: IDownload[]
}
export interface ISource{
    url: string
    id: number
}
export interface IItems{
    data: any
    id: number
    name: string
    email: string
}
export interface ItemsListProps {
    data: IItems[]
}