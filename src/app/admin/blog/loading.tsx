import CreateButton from "@/components/Buttons/CreateButton";
import { DarkSpinner } from "@/components/Spinner/Spinner";
import StatusLabel, { StatusLabelContainer } from "@/components/Status/StatusLabel";
import Title from "@/components/Title";

export default function BlogCardLoading() {
    const array = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <Title title={'Blog Posts'} icon="list-ul" />

            <StatusLabelContainer>
                <StatusLabel
                    name="all"
                    text={'Todos'}
                    href={'?status=all'}
                    activeLink={'all'}
                ></StatusLabel>
                <StatusLabel
                    name="published"
                    text={'Publicados'}
                    href={'?status=published'}
                    activeLink={''}
                ></StatusLabel>
                <StatusLabel
                    name="non-published"
                    text={'No publicados'}
                    href={'?status=non-published'}
                    activeLink={''}
                ></StatusLabel>
                <StatusLabel
                    name="1"
                    text={'Con borrado automático'}
                    href={'?deletable=1'}
                    activeLink={''}
                ></StatusLabel>
            </StatusLabelContainer>

            <div className="flex center gap column down">
                {array.map((index) => {
                    return (
                        <div className="post boxed flex between gap" key={index}>
                            <div className="w1 flex start al-start gap">
                                <div className="first-column flex center al-center post-image">
                                    <DarkSpinner />
                                </div>
                                <div
                                    className="w1 second-column flex center"
                                    style={{ height: 150 }}
                                >
                                    <DarkSpinner />
                                </div>
                            </div>
                        </div>)
                })}
            </div>

            <CreateButton endpoint={'blog/create'} />


        </>
    );
}
