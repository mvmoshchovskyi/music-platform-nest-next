import React from 'react';
import {Button} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className='center'>
                    <h1>You are welcome</h1>
                    <h3>the best track is on our site</h3>
                </div>
            </MainLayout>

            <style jsx>
                {`
                  .center {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 150px;

                  }
                `}

            </style>
        </>
    );
};

export default Index;
