export const BlogAdapters = {
    publicDataAdapter: model => {
        return {
            id: model.id,
            title: model.title,
            content: model.content,
            exceptr: model.exceptr,
            category: model.category,
            created: model.created_at,
            updated: model.updated_at,
            image: model.image,
        };
    },
    adminDataAdapter: model => {
        return {
            id: model.id,
            title: model.title,
            content: model.content,
            exceptr: model.exceptr,
            category: model.category,
            created: model.created_at,
            updated: model.updated_at,
            image: model.image,
            visible: model.visible,
        };
    },
};
