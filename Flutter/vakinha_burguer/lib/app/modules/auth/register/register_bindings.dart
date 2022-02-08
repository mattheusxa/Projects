import 'package:get/get.dart';
import 'package:vakinha_burguer/app/modules/auth/register/register_controller.dart';
import 'package:vakinha_burguer/app/repositories/auth_repository.dart';
import 'package:vakinha_burguer/app/repositories/auth_repository_impl.dart';

class RegisterBindings implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<AuthRepository>(
      () => AuthRepositoryImpl(
        restClient: Get.find(),
      ),
    );

    Get.lazyPut(
      () => RegisterController(
        auth_repository: Get.find(),
      ),
    );
  }
}
