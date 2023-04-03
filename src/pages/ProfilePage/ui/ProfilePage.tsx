import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, {
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DunamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>{t('Главная страница')}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
