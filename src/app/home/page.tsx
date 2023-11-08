import PageLayoutHeader from "@/component/header/page";
import PageLayoutMainContent from "@/component/mainContent/page";
import PageLayoutSidebar from "@/component/sidebar/page";
import { Grid } from "@mui/material";

const PageLayoutHome = () => {
    return (
        <Grid container className="flex p-2.5">
            <Grid item xs={0} sm={3} className="pr-2.5 hide-sidebar">
                <PageLayoutSidebar />
            </Grid>
            <Grid item xs={12} sm={9} className="pl-2.5 div-header-content full-width-content">
                <Grid container direction="column">
                    <Grid item>
                        <PageLayoutHeader />
                    </Grid>
                    <Grid item >
                        <PageLayoutMainContent />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};


export default PageLayoutHome;
