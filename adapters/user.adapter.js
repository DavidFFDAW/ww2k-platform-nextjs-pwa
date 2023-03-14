const commonData = model => { 
    return {
        id: model.id,
        name: model.name,
        username: model.username,
        email: model.email,
        type: model.type,
        created_at: model.created_at,
        updated_at: model.updated_at,
    }
}

export const UserAdapters = {
    publicDataAdapter: model => { 
        const common = commonData(model);
        return common;
    },

    loginDataAdapter: model => { 
        const common = commonData(model);
        common.api_token = model.api_token;
        return common;
    }
}