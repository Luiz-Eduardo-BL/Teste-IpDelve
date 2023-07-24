from rest_framework.permissions import BasePermission

class IsTravelPlanCreator(BasePermission):
    def has_permission(self, request, view):
        # Verifica se o usuário está autenticado
        if request.user.is_authenticated:
            # Verifica se é uma solicitação para criar um plano de viagem
            if view.action == 'create':
                # Permite que o usuário autenticado crie um plano de viagem
                return True
            else:
                # Outras ações (por exemplo, listar planos de viagem) não são permitidas
                return False
        return False
