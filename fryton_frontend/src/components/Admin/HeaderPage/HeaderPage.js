import React from 'react';
import { Button } from 'semantic-ui-react'

export function HeaderPage(props) {
    const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo} = props;
    return (
        <div className={'header_page_admin'}>
            <h2>
                {title}
            </h2>
            <div>
                {btnTitle && (
                    <Button positive onClick={btnClick}>
                        {btnTitle}
                    </Button>
                )}
                {btnTitleTwo && (
                    <Button positive onClick={btnClickTwo}>
                        {btnTitleTwo}
                    </Button>
                )}
            </div>
        </div>
    )
}