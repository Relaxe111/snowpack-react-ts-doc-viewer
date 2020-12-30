import React from 'react'
import Icon from '@ant-design/icons'

import type { IconProps } from '../interfaces'

import OpenSidePatientPanelSvg from './open.svg'
import ArrowRightSvg from './arrow-right.svg'
import ArrowLeftSvg from './arrow-left.svg'
import PatientGroupSvg from './patient group.svg'
import OfficeWorksSvg from './office-workers.svg'
import ActorsSvg from './actors.svg'
import UserUncheckedSvg from './user_unchecked.svg'
import UserCheckedSvg from './user_checked.svg'
import UsersGroupSvg from './group.svg'
import GroupSelectedSvg from './group_selected.svg'
import MoreSvg from './more.svg'
import EditSvg from './edit.svg'
import GridSvg from './grid.svg'

export const OpenSidePatientPanel = (props: Partial<IconProps>) => (
    <Icon component={OpenSidePatientPanelSvg} {...props} />
)
export const OpenPanel = (props: IconProps) => <Icon component={ArrowRightSvg} {...props} />
export const ClosePanel = (props: IconProps) => <Icon component={ArrowLeftSvg} {...props} />
export const PatientGroupSVG = (props: IconProps) => <Icon component={PatientGroupSvg} {...props} />
export const OfficeWorks = (props: IconProps) => <Icon component={OfficeWorksSvg} {...props} />
export const Actors = (props: IconProps) => <Icon component={ActorsSvg} {...props} />
export const UserUncheckedSVG = (props: IconProps) => <Icon component={UserUncheckedSvg} {...props} />
export const UserCheckedSVG = (props: IconProps) => <Icon component={UserCheckedSvg} {...props} />
export const UsersGroupSVG = (props: IconProps) => <Icon component={UsersGroupSvg} {...props} />
export const GroupCheckedSVG = (props: IconProps) => <Icon component={GroupSelectedSvg} {...props} />
export const MoreSVG = (props: IconProps) => <Icon component={MoreSvg} {...props} />
export const EditSVG = (props: IconProps) => <Icon component={EditSvg} {...props} />
export const GridSVG = (props: IconProps) => <Icon component={GridSvg} {...props} />
