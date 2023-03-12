import UserTable from "@/database/User";

export default function Login(props) {
    console.log(props.users);
    return <div>login</div>;
}

export async function getServerSideProps(context) {
    const issues = await UserTable.findAll({ limit: 10 });

    return {
        props: {
            users: JSON.parse(JSON.stringify(issues)),
        },
    };
}
