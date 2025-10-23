/**
 * PhilipsUniguideWithWizard
 * 
 * This component has been integrated directly into SmartNavigator.
 * The SmartNavigator now shows the CBCT wizard and automatically
 * transitions to the Philips Uniguide UI when the wizard is completed.
 * 
 * Simply use SmartNavigator directly:
 * 
 * import { SmartNavigator } from './SmartNavigator';
 * 
 * <SmartNavigator componentSize="fullscreen" isActive={true} />
 */

import { SmartNavigator } from './SmartNavigator';

// Re-export SmartNavigator as default for backward compatibility
export default SmartNavigator;
