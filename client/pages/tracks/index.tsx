import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {IComment, ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {   _id:'string',
            name:'best song',
            artist:'madonna',
            text:'string',
            listens:5,
            picture:'http://localhost:5000/image/bb6dff33-61f1-40df-9dba-af2a6b8cd70d.jpg',
            audio:'string',
            comments: []}
    ]
    return (
        <MainLayout>
            <Grid container style={{justifyContent:'center'}}>
                <Card style={{width: '900px'}}>
                    <Box p={3}>
                    <Grid container style={{justifyContent:'space-between'}}>
                        <h1>List tracks</h1>
                        <Button onClick ={()=>router.push('/tracks/create')}>Download</Button>
                    </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;
