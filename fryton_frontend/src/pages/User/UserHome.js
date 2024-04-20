import React from 'react';
import styled from 'styled-components';
import {Icon} from "semantic-ui-react";

// Define the styled component for the horizontal line
const HeadingLine = styled.hr`
    border: none;
    border-top: 2px solid #333; /* You can adjust the color and thickness as needed */
    margin-top: 10px; /* Adjust this value to control the space between the heading and the line */
    margin-bottom: 20px; /* Adjust this value to control the space between the line and the content below */
`;

export function UserHome() {
    return (
        <div>
            <h1>
                <Icon name="home"/>Home
            </h1>
            <HeadingLine/>
            <p>
                Our web compiler is a powerful tool that allows you to write, compile, and run code online directly from
                your browser.
                Whether you're a beginner learning to code or an experienced developer, our compiler supports Fryton, a
                programming language
                with the characteristics of Python and C, providing a seamless coding experience for programmers of all
                levels.
            </p>
            <p>
                Fryton combines the ease of use and readability of Python with the performance and low-level
                capabilities of C,
                making it a versatile language suitable for a wide range of applications, from scripting and automation
                to
                system-level programming and performance-critical tasks.
            </p>
            <h1>
                <Icon name="student"/>Philosophy
            </h1>
            <HeadingLine/>
            <p>
                <li>
                    <strong>Versatility:</strong><br/>Like Python, Frython values versatility, aiming to be
                    suitable for a wide
                    range of applications, from scripting and automation to system-level programming and
                    performance-critical tasks. It inherits Python's ease of use and readability, making it accessible
                    to
                    beginners while incorporating the performance and low-level capabilities of C for more demanding
                    tasks.<br/><br/>
                </li>
                <li>
                    <strong>Simplicity and Clarity:</strong><br/>Frython aims to follow the principles of
                    simplicity and clarity
                    from Python, favoring straightforward solutions over unnecessarily complex ones. It encourages
                    developers to write clean, readable code that is easy to understand and maintain.<br/><br/>
                </li>
                <li>
                    <strong>Performance:</strong><br/>Drawing inspiration from C, Frython prioritizes performance
                    when
                    necessary, leveraging the efficiency of C for computational-intensive tasks. However, it aims to
                    maintain the simplicity and high-level abstractions characteristic of Python whenever possible.<br/><br/>
                </li>
                <li>
                    <strong>Community and Collaboration:</strong><br/>Like Python, Frython fosters a strong sense
                    of community
                    and collaboration. It encourages developers to share code, contribute to open-source projects, and
                    support each other in learning and improving their programming skills.<br/><br/>
                </li>
                <li>
                    <strong>Practicality:</strong><br/>Frython values practicality and pragmatism, aiming to
                    provide solutions
                    that work efficiently in real-world scenarios. It emphasizes practical use cases and encourages
                    developers to focus on solving problems effectively rather than getting bogged down by theoretical
                    complexities.<br/><br/>
                </li>

                Overall, the philosophy of Frython revolves around combining the best aspects of Python and C to create
                a language that is both powerful and accessible, versatile yet efficient, and conducive to collaboration
                and practical problem-solving.
            </p>
            <h1>
                <Icon name="configure"/>Technologies used:
            </h1>
            <HeadingLine/>
            <ul>
                <li><Icon name="python"/> <a href="https://www.python.org/">Python 3.11</a></li>
                <li><Icon name="python"/> <a href="https://www.djangoproject.com/">Django</a></li>
                <li><Icon name="python"/> <a href="https://www.django-rest-framework.org/">DRF</a></li>
                <li><Icon name="python"/> <a href="https://django-ninja.dev/">Django Ninja</a></li>
                <li><Icon name="python"/> <a href="https://drf-yasg.readthedocs.io/en/stable/">Swagger</a></li>
                <li><Icon name="js"/> <a href="https://nodejs.org/en">JavaScript</a></li>
                <li><Icon name="react"/> <a href="https://react.dev/">ReactJS</a></li>
            </ul>

            <h1>
                <Icon name="settings"/>Key features of our web compiler include:
            </h1>
            <HeadingLine/>
            <ul>
                <li>Support for Fryton, and in the future, intended support for multiple programming languages such as
                    C, C++, Java, Python, JavaScript.
                </li>
                <li>Instant compilation and execution of code with detailed output and error messages.</li>
                <li>Included lections to teach how to use Fryton effectively.</li>
                <li>Repository tools to check how the website was developed.</li>
            </ul>
            <p>
                Get started now by exploring our compiler and unleash your coding creativity!
            </p>
            <p>Contact us! <a href="mailto:support@fryton.com">support@fryton.com</a></p>
        </div>
    );
}