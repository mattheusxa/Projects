import 'package:get/get.dart';
import 'package:vakinha_burguer/app/repositories/auth_repository.dart';

class RegisterController extends GetxController {
  final AuthRepository _authRepository;

  RegisterController({
    required AuthRepository auth_repository,
  }) : _authRepository = auth_repository;
}
