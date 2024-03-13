import {Button, Form} from "semantic-ui-react";
import './RunCodeForm.scss'
export function RunCodeForm() {
    return (
        <Form className={"code_content_form"}>
            <Form.TextArea
                name={"code_content"}
                placeholder={"Write your code here"}
            >
            </Form.TextArea>
            <Button type={"submit"} content={"Run"} primary fluid/>
        </Form>
    );
}

