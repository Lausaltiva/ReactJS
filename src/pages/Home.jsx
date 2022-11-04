import  ItemListContainer  from "../components/ItemListContainer";
import { UserLayout } from "../components/UserLayout";

export const Home = () => {
    return (
        <UserLayout>
            <ItemListContainer />
        </UserLayout>
    );
};