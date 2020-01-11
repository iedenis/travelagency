import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components'
import { Typography, Box, Button, useTheme } from '@material-ui/core'
import CarPicker from './CarPicker/CarPicker'
const Picker = () => {

    const PickerWrapper = styled.div`
    max-width: 490px;
@media  (max-width: ${useTheme().breakpoints.values.sm}) {
    width:100%;
}
`


    const StyledTab = styled(Tab)`

    /* border: 1px solid; */
    &.MuiTab-fullWidth{
        background:#f7f7f7;
        border: 1px solid #e9e9e9;
    }
    &.Mui-selected{
        background:red;
        border-bottom-width: 0;
        background: #ffffff;
       
    }
    &.MuiTab-wrapper: {
        opacity: 1
    }
`
    const StyledTabs = styled(Tabs)`
        background-color: #f7f7f7;
        opacity: 1;
        border: 1px solid #e9e9e9 &:not(:first-of-type): {
        margin-left: -1
      };
        .MuiTabs-indicator{
          display:none;
        }
        .wrapper {
        opacity: 0.7,
      }
      .selected {
        border-bottom-width: 0;
        background : yellow;
    }
`
    const StyledBox = styled(Box)`
        height:240 ;
`
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <StyledBox style={{ background: '#ffffff' }} p={3}>{children}</StyledBox>}
            </Typography>
        );

    }


    const [tabIndex, setTabIndex] = React.useState(0);
    return (
        <PickerWrapper >
            <StyledTabs
                variant="fullWidth"
                value={tabIndex}
                onChange={(e, index) => setTabIndex(index)}
            >
                <StyledTab
                    label={'Cars'} />
                <StyledTab
                    label={'Hotels'} />
                <StyledTab
                    label={'Other'} />
            </StyledTabs>

            <TabPanel value={tabIndex} index={0}>
                <CarPicker />

            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                Hotels
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                Other
            </TabPanel>
        </PickerWrapper>

    );
};



export default Picker
