export interface IProjectIdentification {
    id: string
}

export interface IProjectFields {
    title: string,
    description: string,
    content: string
}

export interface IProjectAttributes {
    attributes: Partial<IProjectFields> & Pick<IProjectFields, 'title'>
}

export interface IProject extends IProjectIdentification, IProjectAttributes{}
