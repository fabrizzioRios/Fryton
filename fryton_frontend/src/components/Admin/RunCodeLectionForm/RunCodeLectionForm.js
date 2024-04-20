import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import './RunCodeLectionForm.scss';
import { runCodeApi } from '../../../api/code';
import * as Yup from 'yup';
import { Editor } from '@monaco-editor/react';
import { useLocation } from 'react-router-dom';

export function RunCodeLectionForm() {
    const location = useLocation();
    const { pathname } = location;
    const lectionNumber = parseInt(pathname.split('/').pop(), 10); // Extract lection number from pathname

    let lection_name, lection_src_image;
    if (lectionNumber === 1) {
        lection_name = 'Lection 1: Introduction to Basic Syntax\n';
        lection_src_image = '/lection_1.png';
    } else if (lectionNumber === 2) {
        lection_name = 'Lection 2: Variable Declaration and Assignment\n';
        lection_src_image = '/lection_2.png';
    } else if (lectionNumber === 3) {
        lection_name = 'Lection 3: Exploring Loops\n';
        lection_src_image = '/lection_3.png';
    } else if (lectionNumber === 4) {
        lection_name = 'Lection 4: Understanding Operators\n';
        lection_src_image = '/lection_4.png';
    } else if (lectionNumber === 5) {
        lection_name = 'Lection 5: Introduction to Functions\n';
        lection_src_image = '/lection_5.png';
    } else {
        lection_name = 'Welcome to learn Fryton!\n';
        lection_src_image = '/learn.jpeg';
    }

    const formik = useFormik({
        initialValues: {
            code_content: '',
        },
        validationSchema: newValidationSchema(),
        validateOnChange: false,
        onSubmit: async (formValues) => {
            try {
                const response = await runCodeApi(formValues);
                console.log(response);
                window.alert(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="lection-form">
            <h1>{lection_name}</h1>
            <Button type="submit">Run</Button>
            <div className="editor-container">
                <Editor
                    height="90vh"
                    defaultValue="//Fryton for dummies :]"
                    width="90vh"
                    theme="vs-dark"
                    language="fryton"
                    onChange={(value) => formik.setFieldValue('code_content', value)}
                />
                <div className="description">
                    <img src={lection_src_image} height={400} width={700}/>
                </div>
            </div>
        </Form>
    );
}

function newValidationSchema() {
    return Yup.object().shape({
        code_content: Yup.string(),
    });
}