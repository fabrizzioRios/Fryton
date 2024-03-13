import {Button, Form} from "semantic-ui-react";
import { useFormik } from 'formik';
import './RunCodeForm.scss'
import {runCodeApi} from "../../../api/code";
import * as Yup from "yup";
export function RunCodeForm() {

    const formik = useFormik({
        initialValues: InitialValues(),
        validationSchema: Yup.object(newValidationSchema()),
        validateOnChange: false,
        onSubmit: async (formValue) =>{
            console.log(formValue)
            try {
                const response = await runCodeApi(formValue)
                console.log(response)
                window.alert(response.data)
            } catch (error) {
                console.log(formValue)
            }
        }
    })
    return (
        <Form className={"code_content_form"} onSubmit={formik.handleSubmit}>
            <Form.TextArea
                name={"code_content"}
                placeholder={"Write your code here"}
                value={formik.values.code_content}
                onChange={formik.handleChange}
                error={formik.errors.code_content}
            />
            <Button type={"submit"} content={"Run"} primary fluid/>
        </Form>
    );
}

function InitialValues() {
    return {
        code_content: "",
    };
}

function newValidationSchema() {
    return {
        code_content: Yup.string(),
    }
}

