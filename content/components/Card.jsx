import React, {Component} from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Backdrop = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    max-width: 300px;
    max-height: 20vh;
    margin-right: 4px;
    border-radius: 1px;
    overflow: hidden;

    background-color: #f8f3d4;
    box-shadow: 0 0 4px rgb(150, 150, 150);

    pointer-events: initial;
`;

const Header = styled.div`
    display: flex;
    flex: 0 0 auto;
    padding: 4px 8px;
    font-weight: bold;
`;

const Title = styled.div`
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Button = styled.button`
    flex: 0 0 auto;

    background-color: transparent;
    border: 0;
`;

const Body = styled.div`
    flex: 1 1 auto;
    padding: 8px;
    overflow: scroll;

    box-shadow: inset 0 2px 2px -2px rgb(150, 150, 150);
`;

const Card = ({children, title}) => {
    return (
        <Draggable bounds=".app__drag-view-port">
            <Backdrop>
                <Header>
                    <Title>{title}</Title>

                    <Button>_</Button>
                    <Button>X</Button>
                </Header>

                {children &&
                    <Body>
                        {children}
                    </Body>
                }
            </Backdrop>
        </Draggable>
    )
}

export default Card
