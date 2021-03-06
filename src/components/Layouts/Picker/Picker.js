import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components'
import { Typography, Box, useTheme, Paper } from '@material-ui/core'
import CarPicker from './CarPicker/CarPicker'
import HotelPicker from './HotelPicker/HotelPicker';
import { useTranslation } from 'react-i18next'

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

const TabsToDisplay = ({ searchType, tabIndex, setTabIndex, t }) => {

    const tabs = [
        <StyledTab key={0} label={t('picker.tabs.cars')} />,
        < StyledTab key={1} label={t('picker.tabs.hotels')} />,
        <StyledTab key={2} label={t('picker.tabs.other')} />
    ]
    return <StyledTabs
        variant="fullWidth"
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
    >
        {searchType === 'cars' ? tabs[0] :
            searchType === 'hotels' ? tabs[1] : tabs}
    </StyledTabs>
}

const Picker = ({ searchType }) => {
    const { t } = useTranslation();

    const PickerWrapper = styled(Paper)`
    z-index:1;
/* border: 1px solid; */
@media screen and (min-width: ${useTheme().breakpoints.values.sm}px) {
    max-width: 500px; 
}
@media  (max-width: ${useTheme().breakpoints.values.sm}px) {
     min-width:100%;
}
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

            <TabsToDisplay tabIndex={tabIndex} searchType={searchType} setTabIndex={setTabIndex} t={t} />

            <TabPanel value={tabIndex} index={0}>
                <CarPicker />
            </TabPanel>

            <TabPanel value={tabIndex} index={1}>
                <HotelPicker />
            </TabPanel>

            <TabPanel value={tabIndex} index={2}>
                {t('picker.tabs.other')}
            </TabPanel>
        </PickerWrapper>
    );
};


export default Picker
