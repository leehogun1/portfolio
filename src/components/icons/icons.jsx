import { icons } from './iconMap';

function icon({name , ...props}) {
    const IconComponent = icons[name];
    return IconComponent ? <IconComponent {...props} /> : null;
}

export default icon