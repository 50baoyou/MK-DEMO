type Info = {
    tag: string;
    address: string;
};

export interface MyRootState {
    name: string;
    age: number;
    info: Info;
}

export interface ItemState {
    id: string;
    count: number;
}
