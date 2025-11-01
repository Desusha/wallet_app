import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faApple, 
  faAmazon,
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCreditCard, 
  faCouch, 
  faBullseye, 
  faGlobe, 
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

export const ICON_MAP: Record<string, IconDefinition> = {
  'apple': faApple,
  'credit-card': faCreditCard,
  'couch': faCouch,
  'bullseye': faBullseye,
  'globe': faGlobe,
  'shopping-basket': faShoppingBasket,
  'amazon': faAmazon,
};

export const DEFAULT_ICON = faCreditCard;

export const PAYMENT_STATUS_MESSAGE = "You've paid your September balance.";
