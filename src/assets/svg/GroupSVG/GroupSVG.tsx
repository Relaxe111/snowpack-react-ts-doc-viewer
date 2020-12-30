import React, { FC, CSSProperties } from 'react'

const defaultColor = '#384849'

interface IGroupSVG {
    firstColor?: string
    secondColor?: string
    thirdColor?: string
    style?: CSSProperties
    className?: string
}

export const GroupSVG: FC<IGroupSVG> = (props) => {
    const { className, firstColor = defaultColor, secondColor = defaultColor, thirdColor = defaultColor, style } = props

    return (
        <svg viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg' className={className} style={style}>
            <path
                d='M11.2071 0.982418C10.2891 1.4707 9.74223 1.96875 9.50786 2.53515C9.41997 2.73046 9.31255 2.91601 9.25395 2.95507C9.127 3.0332 9.127 4.00976 9.25395 4.13672C9.30278 4.18554 9.37114 4.37109 9.38091 4.52734C9.42973 4.86914 9.74223 5.45508 9.84966 5.38672C9.88872 5.36719 10.0352 5.49414 10.1817 5.67969C10.3184 5.86523 10.5625 6.07031 10.7286 6.1289C11.0118 6.25586 11.0215 6.26562 10.8457 6.42187C10.6602 6.59765 9.50786 6.80273 8.4727 6.84179C8.14067 6.86133 7.79888 6.93945 7.5938 7.0664C7.14458 7.33008 6.66606 8.23828 6.68559 8.79492C6.69536 9.01953 6.6563 9.26367 6.58794 9.34179C6.47075 9.47851 6.47075 9.84961 6.50981 15.3477C6.51958 15.9141 6.56841 16.373 6.627 16.4512C6.69536 16.5195 6.71489 16.7246 6.68559 16.9199C6.61723 17.3398 6.77348 17.9258 7.02739 18.209C7.13481 18.3262 7.20317 18.4629 7.16411 18.5117C7.09575 18.6191 7.63286 19.1465 7.85747 19.1758C8.31645 19.2441 8.30669 19.0781 8.30669 25.8262C8.30669 31.8125 8.31645 32.1641 8.48247 32.3887C8.58013 32.5156 8.63872 32.6523 8.61919 32.7012C8.54106 32.8184 9.10747 33.209 9.4102 33.2383C9.55669 33.2578 9.7227 33.3164 9.77153 33.3652C9.90825 33.502 10.4356 33.502 10.7872 33.3652C11.129 33.2383 11.6856 32.7207 11.8125 32.3984C11.8907 32.2129 11.9297 32.1934 11.9688 32.3008C11.9981 32.3789 12.0958 32.5059 12.2032 32.5742C12.3008 32.6426 12.379 32.7695 12.379 32.8379C12.379 33.0137 12.7793 33.2871 13.0821 33.3262C13.209 33.3359 13.4629 33.3848 13.6583 33.4238C14.0782 33.502 14.7422 33.248 15.084 32.877C15.5821 32.3301 15.5723 32.4082 15.5625 25.7187L15.5528 19.4883L16.0118 19.0977C16.2852 18.873 16.627 18.4434 16.8321 18.0625C17.2227 17.3496 17.2618 17.0664 17.3008 14.4297C17.3106 13.8633 17.3497 13.1309 17.3985 12.7891C17.4571 12.3594 17.4375 12.0859 17.3594 11.8906C17.2618 11.6562 17.2618 11.5684 17.3594 11.4512C17.4278 11.373 17.4571 11.207 17.418 11.0801C17.3887 10.9531 17.3399 10.416 17.3106 9.88867C17.2813 9.33203 17.1934 8.79492 17.1055 8.60937C17.0176 8.43359 16.9395 8.17969 16.9297 8.04297C16.8907 7.7207 16.6075 7.30078 16.4317 7.30078C16.3633 7.30078 16.2364 7.22265 16.168 7.11523C16.0118 6.90039 15.7872 6.82226 15.2598 6.80273C15.045 6.79297 14.4981 6.74414 14.0586 6.69531C13.5118 6.62695 13.209 6.62695 13.1407 6.69531C13.0821 6.7539 12.9356 6.76367 12.7403 6.70508C12.5645 6.65625 12.1446 6.61719 11.8028 6.61719C10.9727 6.61719 11.129 6.42187 11.9981 6.38281C12.5352 6.35351 12.7012 6.29492 13.2188 5.95312C14.3321 5.21094 14.9473 3.95117 14.586 3.17968C14.4981 2.99414 14.4297 2.79882 14.4395 2.75C14.4883 2.47656 14.3711 2.29101 13.8438 1.74414C13.5313 1.42187 13.2286 1.13867 13.1895 1.13867C13.1504 1.1289 12.9844 1.10937 12.8282 1.08984C12.6719 1.07031 12.4961 1.01171 12.4375 0.953121C12.3008 0.816402 11.5 0.835934 11.2071 0.982418Z'
                fill={thirdColor}
            />
            <path
                d='M35.1719 1.04102C34.6153 1.22656 34.2344 1.5 33.8926 1.95898C33.4239 2.58398 33.3165 3.0332 33.4141 3.98047C33.4239 4.16602 33.4532 4.40039 33.4532 4.48828C33.4629 4.58594 33.6094 4.81055 33.7657 4.98633C33.9317 5.17188 34.0586 5.36719 34.0586 5.41602C34.0586 5.5625 34.4981 5.93359 34.6641 5.93359C34.7422 5.93359 34.9278 6.02148 35.0743 6.13867C35.3379 6.34375 35.8262 6.39258 36.6661 6.28516C37.6719 6.16797 38.5997 5.25 38.7266 4.24414C38.8438 3.39453 38.8047 2.81836 38.629 2.69141C38.5411 2.62305 38.4434 2.4375 38.4141 2.28125C38.3555 1.97852 38.004 1.53906 37.8086 1.53906C37.7501 1.53906 37.6426 1.4707 37.5645 1.38281C37.1836 0.923828 36.002 0.757812 35.1719 1.04102Z'
                fill={secondColor}
            />
            <path
                d='M23.7168 5.73827C23.5801 5.79686 23.4141 5.81639 23.3457 5.7871C22.9453 5.64061 21.8516 6.49022 21.5195 7.20311C21.2168 7.84764 21.2266 9.09764 21.5391 9.48827C21.6563 9.64452 21.7539 9.83983 21.7539 9.93748C21.7539 10.0254 21.8613 10.2012 21.9981 10.3281C22.1348 10.4551 22.2422 10.5234 22.2422 10.4746C22.2422 10.4258 22.3594 10.5039 22.5156 10.6406C22.877 11.0019 23.2578 11.1191 23.7559 11.0508C23.9902 11.0215 24.2051 11.041 24.2344 11.0898C24.3809 11.334 25.582 10.7969 26.0313 10.2793C26.5391 9.70311 26.666 9.37108 26.6856 8.52147C26.7149 7.64256 26.6367 7.36913 26.2656 6.9785C26.1289 6.83202 26.0508 6.71483 26.0996 6.71483C26.1485 6.71483 26.0606 6.57811 25.9043 6.42186C25.7481 6.25584 25.5527 6.12889 25.4551 6.12889C25.3672 6.12889 25.1817 6.041 25.0449 5.93358C24.752 5.6992 24.0488 5.60155 23.7168 5.73827Z'
                fill={firstColor}
            />
            <path
                d='M34.6445 6.71485C34.5664 6.76367 34.1758 6.78321 33.7656 6.75391C33.1797 6.70508 32.916 6.73438 32.457 6.90039C32.1445 7.00781 31.8516 7.08594 31.8125 7.05664C31.6953 6.98828 31.1973 7.57422 31.168 7.82813C31.1582 7.95508 31.0508 8.24805 30.9238 8.48242C30.748 8.83399 30.709 9.08789 30.6992 9.81055C30.6895 10.2988 30.6602 10.7383 30.6211 10.7773C30.5723 10.8164 30.543 11.1289 30.543 11.4609C30.543 11.8027 30.5723 12.0957 30.6211 12.1152C30.6602 12.1445 30.6797 12.9648 30.6699 13.9512C30.6602 14.9375 30.6895 15.7871 30.7188 15.8457C30.7578 15.8945 30.7871 16.2754 30.7871 16.6758C30.7969 17.2129 30.8457 17.4766 30.9629 17.6523C31.0508 17.7793 31.1289 17.9844 31.1289 18.0918C31.1289 18.1992 31.2168 18.4141 31.3242 18.5801C31.4316 18.7363 31.5195 18.834 31.5195 18.7852C31.5195 18.7363 31.7148 18.9023 31.959 19.1465C32.2031 19.4004 32.3984 19.6543 32.3984 19.7031C32.3984 19.7617 32.4473 19.8887 32.5156 19.9961C32.6133 20.1426 32.6133 20.25 32.5156 20.5137C32.3691 20.9336 32.3691 21.7051 32.5156 21.9492C32.6133 22.0957 32.6133 22.2031 32.5156 22.4668C32.4473 22.6426 32.3984 23.0039 32.3984 23.248C32.3984 23.5019 32.4473 23.7949 32.5156 23.9023C32.6133 24.0488 32.6133 24.1562 32.5156 24.4199C32.3691 24.8398 32.3691 25.6113 32.5156 25.8555C32.6133 26.0019 32.6133 26.1094 32.5156 26.373C32.4473 26.5488 32.3984 26.9101 32.3984 27.1543C32.3984 27.4082 32.4473 27.7012 32.5156 27.8086C32.6133 27.9551 32.6133 28.0625 32.5156 28.3262C32.4473 28.5019 32.3984 28.8633 32.3984 29.1074C32.3984 29.3613 32.4473 29.6543 32.5156 29.7617C32.6133 29.9082 32.6133 30.0156 32.5156 30.2793C32.3691 30.6797 32.3594 31.7734 32.4961 31.8613C32.5547 31.9004 32.5938 31.998 32.584 32.0859C32.5352 32.4082 32.7109 32.7012 33.1016 32.9648C33.7559 33.3945 33.9023 33.4726 34.1367 33.4726C34.4395 33.4726 35.7188 32.8672 35.9434 32.6133C36.1289 32.4082 36.1289 32.4082 36.4219 32.75C36.5879 32.9355 36.7734 33.082 36.8418 33.082C36.9102 33.082 37.0762 33.1699 37.2129 33.2773C37.6035 33.5801 38.209 33.5312 38.7461 33.1406C38.9902 32.9648 39.3027 32.6523 39.4492 32.4375L39.7129 32.0566L39.7031 25.8164C39.6934 19.8301 39.6934 19.5762 39.8691 19.4785C40.543 19.1074 41.3926 17.8769 41.2461 17.4961C41.2168 17.4277 41.2559 17.1543 41.334 16.9004C41.4609 16.4805 41.4902 15.7773 41.5 13.7168C41.5 13.4141 41.5 13.082 41.5 12.9844C41.5293 11.041 41.5098 9.75195 41.4414 9.5957C41.4024 9.48828 41.3535 9.17578 41.334 8.91211C41.3242 8.63867 41.2656 8.31641 41.1973 8.17969C40.7578 7.27149 40.5332 7.01758 40.1524 7.00781C40.0449 7.00781 39.8984 6.94922 39.8301 6.88086C39.752 6.80274 39.4004 6.76367 38.8145 6.76367C38.3164 6.76367 37.877 6.73438 37.8184 6.70508C37.6719 6.60742 34.8008 6.61719 34.6445 6.71485Z'
                fill={secondColor}
            />
            <path
                d='M22.1055 11.4805C22.0664 11.5098 21.6269 11.5488 21.1094 11.5586C20.3086 11.5684 20.1426 11.6074 19.8594 11.8027C19.0391 12.3984 18.7168 13.0332 18.6484 14.1855C18.5605 15.7187 18.5605 19.7617 18.6484 19.8691C18.707 19.9473 18.7168 20.3086 18.6777 20.7676C18.6191 21.3926 18.6387 21.6074 18.7754 21.8809C18.8633 22.0762 18.9316 22.3105 18.9219 22.4082C18.9121 22.5059 18.9023 22.6621 18.9121 22.75C18.9316 23.0039 19.9863 24.1758 20.2207 24.2148C20.4551 24.2441 20.4453 24.1953 20.3281 25.5039C20.2891 25.8555 20.3086 26.1094 20.377 26.1777C20.5137 26.3144 20.5137 26.7051 20.3867 26.7832C20.25 26.8711 20.2695 27.9648 20.4062 28.1992C20.5039 28.3457 20.5039 28.4531 20.4062 28.7168C20.3379 28.8926 20.2891 29.2539 20.2891 29.498C20.2891 29.7519 20.3379 30.0449 20.4062 30.1523C20.5039 30.2988 20.5039 30.4062 20.4062 30.6699C20.2598 31.0898 20.2598 31.8613 20.4062 32.1055C20.5039 32.2519 20.5039 32.3594 20.4062 32.623C20.2598 33.043 20.2598 33.8144 20.4062 34.0586C20.5039 34.2051 20.5039 34.3125 20.4062 34.5762C20.2695 34.9668 20.25 35.875 20.3867 35.9629C20.4355 35.9922 20.4648 36.2851 20.4551 36.6074C20.4355 37.1738 20.4551 37.2226 20.7578 37.4668C20.9238 37.6133 21.0703 37.7793 21.0703 37.8379C21.0703 38.0234 21.7637 38.2383 22.1055 38.1601C22.2812 38.1211 22.457 38.1211 22.5059 38.1699C22.7012 38.3652 23.707 37.6719 23.9414 37.1641C23.9902 37.0664 24.0098 37.0664 24.0586 37.1738C24.0976 37.2422 24.2051 37.3789 24.3027 37.4668C24.4101 37.5547 24.6055 37.7207 24.7422 37.8476C25.1719 38.2285 25.416 38.2773 26.168 38.1211C26.5391 38.043 26.9101 37.9258 26.9883 37.8574C27.3203 37.584 27.5547 37.1445 27.5351 36.832C27.5156 36.6562 27.5547 36.4902 27.6133 36.4512C27.75 36.3633 27.7402 35.2695 27.5937 35.0351C27.4961 34.8887 27.4961 34.7812 27.5937 34.5176C27.6621 34.3418 27.7109 33.9805 27.7109 33.7363C27.7109 33.4824 27.6621 33.1894 27.5937 33.082C27.4961 32.9355 27.4961 32.8281 27.5937 32.5644C27.6621 32.3887 27.7109 32.0273 27.7109 31.7832C27.7109 31.5293 27.6621 31.2363 27.5937 31.1289C27.4961 30.9824 27.4961 30.875 27.5937 30.6113C27.7402 30.1914 27.7402 29.4199 27.5937 29.1758C27.4961 29.0293 27.4961 28.9219 27.5937 28.6582C27.7402 28.2676 27.75 27.3594 27.6133 27.2715C27.5644 27.2422 27.5156 27.1055 27.5156 26.9785C27.5156 26.8516 27.5644 26.7148 27.6133 26.6855C27.6719 26.6562 27.7109 26.3437 27.7109 26.0019C27.7109 25.6601 27.6719 25.3476 27.6133 25.3184C27.5644 25.2891 27.5156 25.1523 27.5156 25.0254C27.5156 24.8984 27.5644 24.7617 27.6133 24.7324C27.6719 24.7031 27.7109 24.5957 27.7109 24.498C27.7109 24.4004 27.8086 24.2539 27.9355 24.1758C28.6973 23.668 29.1953 22.8086 29.2344 21.9101C29.2539 21.5879 29.3027 20.9629 29.3613 20.5332C29.4101 20.1035 29.4199 19.7031 29.3711 19.6543C29.3223 19.5957 29.3125 19.4199 29.3418 19.2637C29.459 18.6777 29.4199 14.0684 29.293 13.9219C29.2344 13.8437 29.1855 13.6289 29.1855 13.4434C29.2051 13.0039 29.0293 12.5937 28.7363 12.3594C28.5996 12.2519 28.5117 12.1348 28.541 12.0859C28.6387 11.9297 28.0625 11.666 27.6523 11.6855C27.418 11.6855 27.2031 11.6465 27.1738 11.5879C27.1348 11.5293 26.8125 11.5 26.3535 11.5098C25.9434 11.5293 25.5625 11.5098 25.5137 11.4805C25.3867 11.4023 22.1836 11.4023 22.1055 11.4805Z'
                fill={firstColor}
            />
            <path
                d='M5.43555 23.1406C4.69336 23.668 3.17969 25.2891 2.51562 26.2461C1.80273 27.291 1.29492 28.3262 0.894531 29.6152C0.621094 30.4551 0.611328 30.582 0.611328 32.3008C0.621094 33.9707 0.640625 34.1758 0.875 34.9375C1.50977 36.9883 2.47656 38.5312 4.21484 40.2598C4.86914 40.9043 5.80664 41.7148 6.29492 42.0664C9.92773 44.6152 14.5664 46.2559 19.9961 46.9102C21.7246 47.125 26.041 47.1543 27.6621 46.9687C31.1777 46.5684 34.3223 45.7969 36.9395 44.6934C37.3691 44.5176 37.7402 44.3613 37.7695 44.3613C37.7988 44.3613 38.3457 44.0781 38.9805 43.7363C40.3184 43.0234 41.7637 42.0664 42.584 41.3633C42.8867 41.0996 43.1406 40.9141 43.1406 40.9629C43.1406 41.002 43.4727 40.709 43.873 40.3086C44.2734 39.9082 44.6055 39.5469 44.6055 39.5176C44.6055 39.4785 44.8887 39.0684 45.2402 38.5996C46.0117 37.584 46.8613 35.875 47.1641 34.7422C47.3594 34.0195 47.3887 33.6875 47.3789 32.2031C47.3789 30.6309 47.3594 30.4258 47.1055 29.6152C46.5488 27.7598 45.4551 25.9531 43.9707 24.4394C42.4375 22.8672 41.8809 22.5742 41.3242 23.0625C40.9043 23.4141 40.9531 23.8242 41.5 24.5859C43.3555 27.1934 43.6094 29.8203 42.2617 32.4961C41.4219 34.1758 39.7324 35.875 37.5742 37.2129C35.1426 38.707 31.3438 39.9375 27.6621 40.4258C26.3438 40.6016 21.4414 40.5918 20.1426 40.4258C14.3809 39.6543 9.76172 37.5254 7.00781 34.3711C6.22656 33.4922 5.62109 32.4277 5.23047 31.3145C4.94727 30.4746 4.91797 30.2891 4.9082 29.1758C4.9082 27.418 5.25 26.3828 6.39258 24.7422C7.02734 23.834 7.0957 23.4141 6.66602 23.0527C6.31445 22.75 5.94336 22.7695 5.43555 23.1406Z'
                fill='#1B8E99'
            />
        </svg>
    )
}
