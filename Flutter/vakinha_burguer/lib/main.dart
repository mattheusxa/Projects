import 'package:flutter/material.dart';
import 'package:get/get_navigation/get_navigation.dart';
import 'package:vakinha_burguer/app/core/bindings/application_binding.dart';
import 'package:vakinha_burguer/app/core/ui/vakinha_ui.dart';
import 'package:vakinha_burguer/app/routes/auth_routers.dart';
import 'package:vakinha_burguer/app/routes/splash_router.dart';

void main() {
  runApp(const VakinhaBurguerMainApp());
}

class VakinhaBurguerMainApp extends StatelessWidget {
  const VakinhaBurguerMainApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Vakinha Burguer',
      theme: VakinhaUI.theme,
      initialBinding: ApplicationBinding(),
      getPages: [
        ...SplashRouters.routers,
        ...AuthRouters.routers,
      ],
    );
  }
}
