import React from 'react'
import style from '../App.module.css';
import styleWireless from './WirelessSettings.module.css'
import styleEthernet from './EthernetSettings.module.css'
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Input, Select} from "../FormsControl/FormsControl";
import {required, validateDNS, validateIp, validateSubnetMask} from "../validators";


const Wireless = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.wireless}>
                <div className={style.content}>
                    <div className={styleWireless.content}>
                        <h3>WirelessSettings</h3>
                        <div>
                            <Field name='enableWifi' component='input' type='checkbox'/> Enable wifi:
                            <div className={styleWireless.enableWifi}>
                                <Field name='wirelessNetwork' label='Wireless Network Name:*'  validate={[required]} disabled={!props.hasEnableWifi} id='wireless1'
                                       component={Select}>
                                    <option></option>
                                    <option>Please select</option>
                                </Field>
                            </div>
                        </div>
                        <div>
                            <Field name='enableWireless' component='input' disabled={!props.hasEnableWifi}
                                   type='checkbox' id='wireless2'/> <label htmlFor='wireless2'>Enable Wireless
                            Security:</label>
                            <div>
                                <Field name='securityKey'
                                       component={Input}
                                       validate={[required]}
                                       label='Security Key:*'
                                       type="text"
                                       disabled={!props.hasEnableWifi || !props.hasEnableWireless}
                                       id='wireless3'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styleEthernet.content}>
                        <h3>Ethernet Settings</h3>
                        <Field name='ip' component='input' type='radio' id='ip1' value='ipAuto'
                               checked={props.hasEnableIpAddressAuto !== 'useIp'}/>
                        <label htmlFor="ip1">Obtain an IP address automatically (DHCP/BootP)</label>
                        <div>
                            <Field name='ip' component='input' type='radio' id='ip2' value='useIp'
                                   checked={props.hasEnableIpAddressAuto === 'useIp'}/>
                            <label htmlFor="ip2">Use the following IP address:</label>
                            <div className={styleEthernet.ipContent}>
                                <div>
                                    <Field name='ipAddress' type='text' component={Input}
                                           validate={[required, validateIp]}
                                           label='IP address:*'
                                           disabled={props.hasEnableIpAddressAuto !== 'useIp'}/>
                                </div>
                                <div>
                                    <Field name='subnetMask' type='text'
                                           component={Input}
                                           validate={[required, validateSubnetMask]}
                                           label='Subnet Mask:*'
                                           disabled={props.hasEnableIpAddressAuto !== 'useIp'}/>
                                </div>
                                <div>
                                    <Field name='defaultGateway' type='text'
                                           component={Input}
                                           label='Default Gateway:'
                                           disabled={props.hasEnableIpAddressAuto !== 'useIp'}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Field name='dns' component='input' type='radio' id='dns1' value='dnsAuto'
                                   checked={props.hasEnableDNSAuto !== 'useDNS'}/>
                            <label htmlFor="dns1">Obtain DNS server address
                                automatically</label>
                            <div>
                                <Field name='dns' component='input' type='radio' id='dns2' value='useDNS'
                                       checked={props.hasEnableDNSAuto === 'useDNS'}/>
                                <label htmlFor="dns2">Use the following DS server address:</label>
                                <div className={styleEthernet.dnsContent}>
                                    <div>
                                        <Field name='prefDnsServer' type='text'
                                               component={Input}
                                               validate={[required, validateDNS]}
                                               label='Preferred DNS server:*'
                                               disabled={props.hasEnableDNSAuto !== 'useDNS'}/>
                                    </div>
                                    <div>
                                        <Field name='alterDnsServer' type='text'
                                               component={Input}
                                               label='Alternative DNS server:'
                                               disabled={props.hasEnableDNSAuto !== 'useDNS'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.buttons}>
                    <button>Save</button>
                </div>
            </div>
        </form>
    )
};

const WirelessReduxForm = reduxForm({
    form: 'wireless'
})(Wireless);
const selector = formValueSelector('wireless');
const SelectingWirelessReduxForm = connect(
    state => {
        const hasEnableWifi = selector(state, 'enableWifi');
        const hasEnableWireless = selector(state, 'enableWireless');
        const hasEnableIpAddressAuto = selector(state, 'ip');
        const hasEnableDNSAuto = selector(state, 'dns');
        return {
            hasEnableWifi,
            hasEnableWireless,
            hasEnableIpAddressAuto,
            hasEnableDNSAuto
        }
    }
)(WirelessReduxForm);

export default SelectingWirelessReduxForm;