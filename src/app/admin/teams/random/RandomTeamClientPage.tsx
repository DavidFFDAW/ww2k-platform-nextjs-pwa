"use client";
import Form from "@/components/Forms/Form/Form";
import { ConditionalLoading } from "@/components/Loading";
import useRandomTeam from "./useRandomTeam";
import HttpForm from "@/components/Forms/HttpForm/HttpForm";
import { ComponentSpinner } from "@/components/Spinner/Spinner";
import SearchRandomTeam from "./components/SearchRandomTeam";
import CreateRandomTeam from "./components/CreateRandomTeam";

export default function RandomTeamClientPage() {
    const { state, setState } = useRandomTeam();

    return (
        <>
            <HttpForm
                action="/api/teams/random"
                method="POST"
                dispatchState={setState}
                responseKey="members"
            >
                <SearchRandomTeam />
            </HttpForm>

            <ConditionalLoading
                condition={!state.loading}
                fallback={<ComponentSpinner className="down" />}
            >
                <Form
                    method="POST"
                    action="/api/teams/create"
                    className="flex center al-center column gap wrestler-upsert-form space-down"
                    debug={true}
                    sendHttp={true}
                    redirect="/admin/teams"
                >
                    <CreateRandomTeam list={state.members} />
                </Form>
            </ConditionalLoading>
        </>
    );
}
