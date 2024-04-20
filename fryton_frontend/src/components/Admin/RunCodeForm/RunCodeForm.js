import { Button, Form } from "semantic-ui-react";
import { useFormik } from 'formik';
import './RunCodeForm.scss';
import { runCodeApi } from "../../../api/code";
import * as Yup from "yup";
import { Editor } from "@monaco-editor/react";

export function RunCodeForm() {

    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: newValidationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            console.log(formValue);
            try {
                const response = await runCodeApi(formValue);
                console.log(response);
                window.alert(response.data);
            } catch (error) {
                console.log(formValue);
            }
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Button type="submit">Run</Button>
            <Editor
                height="90vh"
                defaultValue="Write your code here"
                theme="vs-dark"
                language="fryton"
                onChange={(value) => formik.setFieldValue('code_content', value)}
            />
        </Form>
    );
}

function InitialValues() {
    return {
        code_content: "",
    };
}

function newValidationSchema() {
    return Yup.object().shape({
        code_content: Yup.string(),
    });
}

