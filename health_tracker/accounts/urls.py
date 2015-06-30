from django.conf.urls import include, url
from accounts import views as account_views
from django.contrib.auth import views as builtin


urlpatterns = [
    url(r'^login/$', builtin.login, name="login"),
    url(r'^logout/', builtin.logout_then_login, {"login_url": "login"}, name="logout"),
    url(r'^register/$', account_views.register, name="user_register"),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]