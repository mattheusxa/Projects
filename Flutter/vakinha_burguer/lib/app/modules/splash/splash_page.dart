import 'package:flutter/material.dart';
import 'package:vakinha_burguer/app/core/ui/widgets/vakinha_textformfield.dart';

class SplashPage extends StatelessWidget {
  const SplashPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Splash'),
      ),
      body: Column(
        children: [
          VakinhaTextformfield(),
        ],
      ),
    );
  }
}
