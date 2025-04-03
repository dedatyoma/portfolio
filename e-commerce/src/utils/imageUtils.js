/**
 * @param {string} imageName 
 * @returns {string} 
 */
export const importImage = (imageName) => {
  return new URL(`../assets/${imageName}`, import.meta.url).href;
};

import p1_img from '../assets/product_1.png';
import p2_img from '../assets/product_2.png';
import p3_img from '../assets/product_3.png';
import p4_img from '../assets/product_4.png';

export const commonImages = {
  'product_1.png': p1_img,
  'product_2.png': p2_img,
  'product_3.png': p3_img,
  'product_4.png': p4_img,
};

/**
 * @param {string} imageName 
 * @returns {string} 
 */
export const getImage = (imageName) => {

  if (commonImages[imageName]) {
    return commonImages[imageName];
  }
  
  return importImage(imageName);
}; 