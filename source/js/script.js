import { initMenu } from './menu';
import { initPdp } from './pdp';
import { initCollectionSlider } from './collection-slider';
import { initCollectionSliderWithSidePic } from './collection-slider-with-side-pic';
import { initPictureSlider } from './picture-slider';
import { initSelectionSlider } from './selection-slider';
import { initRelatedSlider } from './related-slider';
import { initDouble } from './double';
import { initFaq } from './faq';
import { initJumboSlider } from './jumbo-slider';
import { initHorizontalSlider } from './horizontalSlider';
import { initLanguageSwitcher } from './languageSwitcher';

initMenu();
initPdp();
initCollectionSlider();
initCollectionSliderWithSidePic();
initPictureSlider();
initSelectionSlider();
initRelatedSlider();
initDouble();
initFaq();
initJumboSlider();
initHorizontalSlider();
initLanguageSwitcher();

Fancybox.bind('[data-fancybox]', {
    'type': 'image',
});
