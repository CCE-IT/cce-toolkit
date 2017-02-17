from setuptools import setup

setup(
    name="cce_toolkit",
    version="1.0.0-beta",
    author_email='devs@cce.ou.edu',
    description=('A collection of python helpers and custom Django views, '
                 'forms and models created for rapid development of Management'
                 ' Information Systems'),
    author='University of Oklahoma - College of Continuing Education - IT',
    license='BSD',

    install_requires=[
        "django-cuser",
        "arrow"
        "django-request-provider"
        "user-agents"
    ],
    classifiers=[
        'Development Status :: 1.0.0-b0',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Topic :: Software Development :: Libraries :: Application Frameworks',
        'Topic :: Software Development :: Libraries :: Python Modules',
        ],
    url='https://github.com/cceit/cce-toolkit.git',
    packages=['toolkit'],
    include_package_data=True,
    package_data={
        'toolkit': [
            '*.py',
            'apps/*.py',
            'apps/toolkit_activity_log/*.py',
            'apps/toolkit_activity_log/migrations/*.py',
            'apps/toolkit_activity_log/templates/toolkit_activity_log/*.html',
            'apps/breadcrumbs/*.py',
            'apps/breadcrumbs/middleware/*.py',
            'apps/breadcrumbs/templates/*.html',
            'apps/breadcrumbs/templatetags/*.py',
            'management/*.py',
            'management/commands/*.py',
            'apps/fabfile/*.py',
            'forms/*.py',
            'helpers/*.py',
            'helpers/bdd/*.py',
            'models/*.py',
            'static/*.js',
            'static/*.css',
            'static/toolkit/*.js',
            'static/toolkit/*.css',
            'templates/*.html',
            'templates/comments/*.html',
            'templates/form_fragments/*.html',
            'templates/registration/*.html',
            'templatetags/*.py',
            'views/*.py',
        ],
    },
    zip_safe=False,
)
