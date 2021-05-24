import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  safeSvg;
  svg =
    '<div> <?xml version="1.0" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99 69" width="99" height="69"><g fill="#0e144f" color="#0e144f" transform="translate(27.033 0) scale(0.44) "><svg width="100.0" height="100.0" x="0.0" y="0.0" viewBox="0 0 100 100"><g><g><path d="M71.841,38.928c-0.24-3.188-3.028-5.587-6.217-5.347c-3.189,0.242-5.588,3.031-5.348,6.218    c0.198,2.628,2.144,4.78,4.693,5.262l1.335,17.752c0.073,0.849,0.821,1.488,1.669,1.424c0.415-0.031,0.794-0.223,1.064-0.541    c0.271-0.316,0.401-0.717,0.367-1.127l-1.341-17.768C70.466,43.918,72.036,41.512,71.841,38.928z M65.851,36.609    c1.51-0.114,2.83,1.021,2.944,2.53c0.113,1.509-1.022,2.829-2.531,2.942c-1.51,0.114-2.83-1.021-2.943-2.53    C63.206,38.042,64.342,36.723,65.851,36.609z"></path><path d="M82.085,45.15c-0.412-0.069-0.825,0.026-1.165,0.269c-0.339,0.242-0.562,0.6-0.628,1.005l-0.422,2.49    c-0.16,0.941-0.709,1.661-1.49,2l0.795-4.687c0.138-0.843-0.436-1.645-1.274-1.787c-0.411-0.07-0.825,0.026-1.168,0.27    c-0.338,0.244-0.56,0.602-0.624,1.004l-0.793,4.681c-0.627-0.578-0.909-1.438-0.748-2.379l0.425-2.5    c0.134-0.842-0.438-1.642-1.276-1.784c-0.411-0.07-0.824,0.025-1.164,0.268c-0.339,0.242-0.562,0.601-0.628,1.006l-0.425,2.509    c-0.441,2.598,0.929,5.155,3.288,6.237l-2.979,17.551c-0.134,0.842,0.439,1.642,1.276,1.784c0.411,0.069,0.824-0.026,1.164-0.269    c0.339-0.242,0.562-0.6,0.628-1.005l2.977-17.569c2.544-0.28,4.648-2.245,5.082-4.811l0.424-2.496    C83.496,46.095,82.924,45.292,82.085,45.15z"></path></g><path d="M63.314,63.039l-0.265-3.517c-0.811,1.398-1.794,2.723-2.99,3.92c-7.423,7.423-19.458,7.423-26.88,0   c-7.424-7.425-7.424-19.459,0-26.881c6.887-6.888,17.74-7.373,25.2-1.478c0.402-0.718,0.904-1.374,1.485-1.953   c-8.423-6.628-20.655-6.073-28.421,1.694c-8.382,8.381-8.382,21.969,0,30.352c8.38,8.381,21.97,8.381,30.352,0   c0.569-0.569,1.092-1.167,1.584-1.78C63.359,63.276,63.325,63.162,63.314,63.039z"></path><g><path d="M69.512,66.91c-0.417,0.163-0.852,0.285-1.312,0.319c-0.114,0.008-0.229,0.013-0.343,0.013    c-1.257,0-2.402-0.537-3.235-1.391c-0.336,0.38-0.659,0.768-1.022,1.131c-9.379,9.378-24.585,9.378-33.963,0    c-9.379-9.38-9.379-24.584,0-33.963c8.861-8.861,22.919-9.338,32.354-1.453c1.028-0.539,2.179-0.883,3.408-0.977    c0.224-0.017,0.445-0.025,0.665-0.025c1.575,0,3.06,0.432,4.35,1.174c-0.788-1.024-1.643-2.014-2.581-2.953    c-11.716-11.715-30.712-11.715-42.427,0c-11.716,11.716-11.716,30.711,0,42.428c11.715,11.715,30.711,11.714,42.427-0.001    c0.4-0.4,0.784-0.811,1.157-1.227L69.512,66.91z"></path></g></g></svg></g><path fill="#546192" fill-rule="nonzero" d="M1.27 0.94Q1.73 0.94 2.10 1.18Q2.47 1.42 2.54 2.02L2.54 2.02Q2.83 3.91 2.92 5.80Q3 7.68 3 10.06L3 10.06Q3 11.06 2.83 13.73L2.83 13.73Q3.89 13.82 4.46 13.82L4.46 13.82Q4.87 13.82 6.31 13.70L6.31 13.70Q7.15 13.58 7.78 13.58L7.78 13.58Q8.35 13.58 8.83 13.69Q9.31 13.80 9.82 14.04L9.82 14.04Q10.32 14.33 10.32 14.93L10.32 14.93Q10.32 15.41 10.02 15.79Q9.72 16.18 9.31 16.18L9.31 16.18Q9.02 16.18 8.40 16.08L8.40 16.08Q7.27 15.91 6.24 15.91L6.24 15.91Q5.90 15.91 5.48 15.95Q5.06 15.98 4.87 15.98L4.87 15.98Q4.30 16.06 3.72 16.06L3.72 16.06Q2.54 16.06 1.61 15.94L1.61 15.94Q1.13 15.89 0.65 15.56Q0.17 15.24 0.17 14.62L0.17 14.62Q0.17 14.26 0.26 12.77L0.26 12.77Q0.43 10.30 0.43 9.00L0.43 9.00Q0.43 7.99 0.34 6.89Q0.24 5.78 0.22 5.50L0.22 5.50Q0 3.46 0 2.14L0 2.14Q0 1.51 0.30 1.22Q0.60 0.94 1.27 0.94L1.27 0.94ZM21.22 8.47Q21.41 8.81 21.53 9.44Q21.65 10.08 21.65 10.58L21.65 10.58Q21.65 11.52 21.24 13.25L21.24 13.25Q19.58 16.27 16.34 16.27L16.34 16.27Q15.14 16.27 13.90 15.48Q12.65 14.69 12.17 13.66L12.17 13.66Q11.52 11.59 11.52 11.04L11.52 11.04Q11.52 10.08 11.94 9.00Q12.36 7.92 13.01 7.13L13.01 7.13Q13.42 6.58 14.47 6.18Q15.53 5.78 16.39 5.78L16.39 5.78Q18.07 5.78 19.25 6.42Q20.42 7.06 21.22 8.47L21.22 8.47ZM19.13 12.34Q19.25 12.02 19.25 10.73L19.25 10.73Q19.25 10.03 19.00 9.36Q18.74 8.69 18.26 8.21L18.26 8.21Q18.22 8.16 18 8.05Q17.78 7.94 17.41 7.84Q17.04 7.73 16.56 7.73L16.56 7.73Q15.22 7.73 14.59 8.81Q13.97 9.89 13.97 11.26L13.97 11.26Q13.97 11.50 14.10 12.17Q14.23 12.84 14.33 13.01L14.33 13.01Q14.40 13.18 14.70 13.48Q15.00 13.78 15.44 14.00Q15.89 14.23 16.37 14.23L16.37 14.23Q17.45 14.23 18.10 13.72Q18.74 13.20 19.13 12.34L19.13 12.34ZM38.98 1.15Q38.98 1.39 38.86 2.47L38.86 2.47Q38.59 5.11 38.59 7.82L38.59 7.82Q38.59 10.20 38.66 11.45Q38.74 12.70 39.02 13.36Q39.31 14.02 39.91 14.02L39.91 14.02Q41.06 14.02 41.06 14.78L41.06 14.78Q41.06 15.29 40.56 15.64Q40.06 15.98 39.46 15.98L39.46 15.98Q38.74 15.98 38.11 15.65Q37.49 15.31 37.13 14.62L37.13 14.62Q36.62 15.36 35.68 15.80Q34.73 16.25 33.84 16.25L33.84 16.25Q32.47 16.25 31.42 15.67Q30.36 15.10 29.78 14.10Q29.21 13.10 29.21 11.90L29.21 11.90Q29.21 10.75 29.48 9.68Q29.76 8.62 30.24 7.92L30.24 7.92Q30.89 7.01 31.98 6.47Q33.07 5.93 34.13 5.93L34.13 5.93Q34.78 5.93 35.35 6.18Q35.93 6.43 36.36 6.79L36.36 6.79Q36.36 5.18 36.34 4.78L36.34 4.78L36.34 4.27Q36.34 2.04 36.62 1.01L36.62 1.01Q36.89 0 37.90 0L37.90 0Q38.45 0 38.71 0.24Q38.98 0.48 38.98 1.15L38.98 1.15ZM31.58 11.86Q31.58 12.96 32.22 13.63Q32.86 14.30 33.74 14.30L33.74 14.30Q35.02 14.30 35.63 13.51Q36.24 12.72 36.24 11.47L36.24 11.47L36.22 9.10Q35.28 8.06 34.27 8.06L34.27 8.06Q33.58 8.06 32.96 8.41Q32.35 8.76 31.99 9.46L31.99 9.46Q31.58 10.25 31.58 11.86L31.58 11.86ZM42.46 11.09Q42.46 10.18 42.79 9.25Q43.13 8.33 43.68 7.56L43.68 7.56Q44.23 6.79 45.43 6.30Q46.63 5.81 47.57 5.81L47.57 5.81Q48.53 5.81 49.52 6.07Q50.52 6.34 50.90 6.89L50.90 6.89Q51.79 8.14 51.79 9.34L51.79 9.34Q51.79 9.98 51.52 10.44Q51.24 10.90 50.74 11.42L50.74 11.42Q50.33 11.86 49.45 12.00Q48.58 12.14 47.71 12.14L47.71 12.14Q47.16 12.14 46.37 12.04Q45.58 11.93 44.83 11.76L44.83 11.76Q44.88 12.24 45.07 12.70Q45.26 13.15 45.53 13.39L45.53 13.39Q46.01 13.85 46.52 13.97Q47.04 14.09 47.86 14.09L47.86 14.09Q48.72 14.09 49.46 13.80L49.46 13.80Q50.06 13.58 50.45 13.58L50.45 13.58Q50.90 13.58 51.14 13.86Q51.38 14.14 51.38 14.57L51.38 14.57Q51.38 15.17 50.69 15.55Q49.99 15.94 49.09 16.12Q48.19 16.30 47.64 16.30L47.64 16.30Q46.51 16.30 45.46 15.89Q44.40 15.48 43.70 14.74L43.70 14.74Q43.13 14.06 42.79 13.12Q42.46 12.17 42.46 11.09L42.46 11.09ZM47.69 7.85Q47.16 7.85 46.63 8.05Q46.10 8.26 45.77 8.62L45.77 8.62Q45.34 9.07 45.18 9.35Q45.02 9.62 44.98 10.10L44.98 10.10Q45.58 10.30 47.47 10.30L47.47 10.30Q48.50 10.30 49.07 9.98Q49.63 9.67 49.63 9.17L49.63 9.17Q49.63 8.66 49.01 8.26Q48.38 7.85 47.69 7.85L47.69 7.85ZM58.49 2.18Q58.49 1.15 60.00 1.15L60.00 1.15Q60.65 1.15 62.47 1.20L62.47 1.20Q64.49 1.30 65.52 1.30L65.52 1.30Q66.36 1.30 67.56 1.20L67.56 1.20Q68.38 1.15 68.59 1.15L68.59 1.15Q69.91 1.20 70.82 1.63L70.82 1.63Q71.09 1.75 71.26 1.92Q71.42 2.09 71.42 2.47L71.42 2.47Q71.42 3.00 71.09 3.37Q70.75 3.74 70.27 3.74L70.27 3.74Q69.74 3.74 68.74 3.60L68.74 3.60Q67.85 3.43 67.18 3.43L67.18 3.43Q66.53 3.43 66.19 3.46L66.19 3.46Q66.12 4.25 66.12 7.25L66.12 7.25Q66.12 10.82 66.34 14.50L66.34 14.50L66.38 15.19Q66.38 16.18 65.26 16.18L65.26 16.18Q64.37 16.18 64.06 15.76Q63.74 15.34 63.74 14.47L63.74 14.47Q63.74 12.77 63.65 10.22L63.65 10.22Q63.55 8.11 63.55 7.22L63.55 7.22Q63.55 6.62 63.70 3.55L63.70 3.55L60.89 3.58Q59.54 3.58 59.02 3.32Q58.49 3.07 58.49 2.18L58.49 2.18ZM74.18 0.77Q75.02 0.84 75.65 1.21Q76.27 1.58 76.27 2.33L76.27 2.33Q76.27 2.88 75.76 3.20Q75.24 3.53 74.52 3.53L74.52 3.53Q73.82 3.53 73.56 3.17Q73.30 2.81 73.30 2.42L73.30 2.42Q73.30 1.70 73.45 1.22Q73.61 0.74 74.18 0.77L74.18 0.77ZM76.10 7.08L76.10 11.40L76.10 12.10Q76.10 13.03 76.16 13.86Q76.22 14.69 76.32 15.53L76.32 15.53Q76.30 15.77 75.96 16.02Q75.62 16.27 75.36 16.27L75.36 16.27Q74.90 16.27 74.44 16.09Q73.97 15.91 73.87 15.65L73.87 15.65Q73.73 14.88 73.73 14.28L73.73 14.28Q73.73 12.31 73.61 9.86L73.61 9.86Q73.51 7.70 73.51 6.84L73.51 6.84Q73.51 6.41 73.94 6.10Q74.38 5.78 74.86 5.78L74.86 5.78Q75.55 5.78 75.83 6.10Q76.10 6.41 76.10 7.08L76.10 7.08ZM80.26 7.97L79.10 7.87Q78.77 7.82 78.56 7.58Q78.36 7.34 78.36 7.01L78.36 7.01Q78.36 6.84 78.44 6.65Q78.53 6.46 78.70 6.31L78.70 6.31Q79.01 6.00 80.38 6.00L80.38 6.00Q80.57 5.06 80.57 4.10L80.57 4.10Q80.57 3.74 80.54 3.48Q80.52 3.22 80.52 3.07L80.52 3.07Q80.52 2.54 80.92 2.28Q81.31 2.02 81.82 2.02L81.82 2.02Q82.44 2.02 82.67 2.33Q82.90 2.64 82.90 3.48L82.90 3.48Q82.90 4.73 82.68 5.93L82.68 5.93Q83.06 5.93 83.74 5.88L83.74 5.88Q84.65 5.83 85.06 5.83L85.06 5.83Q85.46 5.83 85.76 6.04Q86.06 6.24 86.06 6.60L86.06 6.60Q86.06 7.54 85.22 7.70L85.22 7.70Q84.34 7.92 82.46 7.97L82.46 7.97Q82.39 8.90 82.39 10.01L82.39 10.01Q82.39 11.74 82.61 12.84L82.61 12.84Q82.75 13.61 83.10 13.96Q83.45 14.30 84.14 14.30L84.14 14.30Q84.55 14.30 84.98 14.09L84.98 14.09Q85.27 13.92 85.51 13.92L85.51 13.92Q85.85 13.92 86.00 14.14Q86.16 14.35 86.16 14.71L86.16 14.71Q86.16 15.38 85.44 15.83Q84.72 16.27 83.59 16.27L83.59 16.27Q82.90 16.27 82.19 15.94Q81.48 15.60 81.00 15.10L81.00 15.10Q80.93 15.02 80.74 14.54Q80.54 14.06 80.40 13.51L80.40 13.51Q80.16 12.38 80.16 10.34L80.16 10.34Q80.16 9.46 80.26 7.97L80.26 7.97ZM97.63 8.47Q97.82 8.81 97.94 9.44Q98.06 10.08 98.06 10.58L98.06 10.58Q98.06 11.52 97.66 13.25L97.66 13.25Q96.00 16.27 92.76 16.27L92.76 16.27Q91.56 16.27 90.31 15.48Q89.06 14.69 88.58 13.66L88.58 13.66Q87.94 11.59 87.94 11.04L87.94 11.04Q87.94 10.08 88.36 9.00Q88.78 7.92 89.42 7.13L89.42 7.13Q89.83 6.58 90.89 6.18Q91.94 5.78 92.81 5.78L92.81 5.78Q94.49 5.78 95.66 6.42Q96.84 7.06 97.63 8.47L97.63 8.47ZM95.54 12.34Q95.66 12.02 95.66 10.73L95.66 10.73Q95.66 10.03 95.41 9.36Q95.16 8.69 94.68 8.21L94.68 8.21Q94.63 8.16 94.42 8.05Q94.20 7.94 93.83 7.84Q93.46 7.73 92.98 7.73L92.98 7.73Q91.63 7.73 91.01 8.81Q90.38 9.89 90.38 11.26L90.38 11.26Q90.38 11.50 90.52 12.17Q90.65 12.84 90.74 13.01L90.74 13.01Q90.82 13.18 91.12 13.48Q91.42 13.78 91.86 14.00Q92.30 14.23 92.78 14.23L92.78 14.23Q93.86 14.23 94.51 13.72Q95.16 13.20 95.54 12.34L95.54 12.34Z" transform="translate(0, 52)"></path></svg></div>';
  constructor(private ngxSpinner: NgxSpinnerService) {}

  ngAfterViewInit() {}

  async mostrarSpinner() {
    this.ngxSpinner.show();
  }
  
  ocultarSpinner() {
    this.ngxSpinner.hide();
  }
}
