import React, { memo } from 'react';
import { RoutePath } from 'shared/config/routeCinfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';

interface SidebatItemProps {
    item?: SidebarItemType;
    collapsed?: boolean;
}

const SidebatItem = memo(({ item, collapsed }: SidebatItemProps) => {
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.link, {}, [])}
        >
            {collapsed ? <item.Icon className={cls.icon} /> : t(item.text)}
        </AppLink>
    );
});

export default SidebatItem;
