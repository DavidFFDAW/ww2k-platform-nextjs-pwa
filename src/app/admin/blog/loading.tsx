import { DarkSpinner } from "@/components/Spinner/Spinner";

export default function BlogCardLoading() {
    return (
        <div className="post boxed flex between gap">
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
        </div>
    );
}
