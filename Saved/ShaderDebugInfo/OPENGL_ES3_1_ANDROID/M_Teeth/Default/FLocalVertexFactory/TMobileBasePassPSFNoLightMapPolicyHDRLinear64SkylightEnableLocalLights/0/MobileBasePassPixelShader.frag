// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFNoLightMapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: MobileDirectionalLight(4): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(5): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:752-0:h:28:32,0:786-0:m:8:1,0:792-0:h:60:3,0:987-0:h:64:1,0:988-0:h:68:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:m:0:4,4:4-4:m:4:4,4:12-4:m:8:4,4:84-4:u:0:1,5:4-5:h:0:4,5:8-5:h:4:4,5:12-5:h:8:4,5:16-5:h:12:4,5:20-5:h:16:4,5:24-5:h:20:4,5:28-5:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[17])
#define View_bSubsurfacePostprocessEnabled (pc0_h[16].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[15].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[7 + int(Offset)])
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[18];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc4_u[0].x)
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc4_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc4_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc4_m[0])
uniform uvec4 pc4_u[1];
uniform mediump vec4 pc4_m[3];


#define Material_PreshaderBuffer_7 (pc5_h[6])
#define Material_PreshaderBuffer_6 (pc5_h[5])
#define Material_PreshaderBuffer_5 (pc5_h[4])
#define Material_PreshaderBuffer_4 (pc5_h[3])
#define Material_PreshaderBuffer_3 (pc5_h[2])
#define Material_PreshaderBuffer_2 (pc5_h[1])
#define Material_PreshaderBuffer_1 (pc5_h[0])
uniform highp vec4 pc5_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _482;
vec4 _483;
vec3 _484;

void main()
{
    highp vec3 _515;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _515 = -View_ViewForward;
    }
    else
    {
        _515 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _177 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _526 = vec4(_177, sqrt(clamp(1.0 - dot(_177, _177), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _85 = _526.z + 1.0;
    vec2 _184 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _537 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _540 = _537.x * Material_PreshaderBuffer_1.w;
    vec3 _89 = vec4(_184, sqrt(clamp(1.0 - dot(_184, _184), 0.0, 1.0)), 1.0).xyz * vec3(_540, _540, 1.0);
    vec3 _94 = vec3(_526.xy, _85);
    vec3 _98 = vec3(_89.xy * vec2(-1.0), _89.z);
    vec3 _104 = (_94 * vec3(dot(_94, _98))) - (vec3(_85) * _98);
    float _106 = _104.z + 1.0;
    vec2 _191 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _553 = mix(vec3(0.0, 0.0, 1.0), vec4(_191, sqrt(clamp(1.0 - dot(_191, _191), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _114 = vec3(_104.xy, _106);
    vec3 _118 = vec3(_553.xy * vec2(-1.0), _553.z);
    vec3 _124 = (_114 * vec3(dot(_114, _118))) - (vec3(_106) * _118);
    float _126 = _124.z + 1.0;
    highp vec4 _557 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _198 = (_557.xy * vec2(2.0)) - vec2(1.0);
    highp float _560 = sqrt(clamp(1.0 - dot(_198, _198), 0.0, 1.0));
    vec3 _131 = vec3(_124.xy, _126);
    vec3 _134 = vec3(vec4(_198, _560, 1.0).xy * vec2(-1.0), _560);
    vec3 _141 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_131 * vec3(dot(_131, _134))) - (vec3(_126) * _134))) * 1.0;
    highp vec3 _565 = (-_515) + ((_141 * dot(_141, _515)) * 2.0);
    highp vec4 _569 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _576 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _580 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _142 = _569.xyz;
    highp vec4 _587 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _593 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _153 = _593.x;
    vec3 _155 = mix(mix(_142, _576.xyz * (_142 / _580.xyz), vec3(0.669921875)), (_587.xyz * (_142 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_153));
    highp vec4 _600 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _207 = _600.x;
    float _208 = _600.y;
    float _205 = _600.z;
    vec3 _164 = _537.xyz;
    vec3 _166 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _213 = clamp(mix(_155, _155 * vec3((_207 <= 0.0) ? 0.0 : pow(_207, 0.300048828125), (_208 <= 0.0) ? 0.0 : pow(_208, 0.300048828125), (_205 <= 0.0) ? 0.0 : pow(_205, 0.300048828125)), vec3(_153 * clamp(1.0 - ((1.0 - _593.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _164, vec3(0.0), vec3(1.0));
    float _214 = clamp((_164 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_515, _166)) * _166) * vec3(2.0)) - _515, _515)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _622 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _153), 0.0, 1.0));
    vec3 _217 = dFdx(_141);
    vec3 _218 = dFdy(_141);
    highp float _628 = clamp(pow(max(dot(_217, _217), dot(_218, _218)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _222 = vec3(0.07999999821186065673828125 * _214);
    highp vec4 _634 = vec4(_141, 1.0);
    highp vec3 _638 = _482;
    _638.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _634);
    highp vec3 _642 = _638;
    _642.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _634);
    highp vec3 _646 = _642;
    _646.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _634);
    vec3 _223 = max(vec3(0.0), _646) * View_SkyLightColor.xyz;
    highp vec4 _665 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _232 = mix(1.0, dot(vec4(1.0), _665), dot(_665, vec4(1.0)));
    highp float _669 = max(0.0, dot(_141, normalize(_515 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _672 = uint(((vec4(_484.x, _484.y, _484.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _681 = (vec2(uvec2(5u, _672)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _683 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _681, 0.0);
    float _246 = _683.z;
    highp float _686 = max(clamp(_622 * (_683.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _250 = clamp(_622 * (_683.y * 2.0), 0.0, 1.0);
    float _236 = mix(_686, _250, _246);
    float _237 = dot(_141, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _693 = float(_672);
    highp vec2 _702 = (vec2(uvec2(0u, _672)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _705 = vec3(1.0) * max(0.0, dot(_141, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _253 = _213 * 0.318407952785491943359375;
    highp float _710 = 1.0 - (_669 * _669);
    float _254 = _686 * _686;
    highp float _711 = _669 * _254;
    highp float _713 = _254 / (_710 + (_711 * _711));
    float _258 = _250 * _250;
    highp float _714 = _669 * _258;
    highp float _716 = _258 / (_710 + (_714 * _714));
    vec4 _272 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _236) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _273 = _272.x;
    float _276 = exp2((-9.28125) * clamp(abs(dot(_141, _515)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _283 = (vec2(-1.0400390625, 1.0400390625) * ((min(_273 * _273, _276) * _273) + _272.y)) + _272.zw;
    float _267 = clamp(_214 * 4.0, 0.0, 1.0);
    highp vec2 _729 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _756 = uvec2(uint(_729.x), uint(_729.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _363;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _363 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _565, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_622, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _363 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _565, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_622, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _307 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _308 = _307.x;
    vec2 _316 = (vec2(-1.0400390625, 1.0400390625) * ((min(_308 * _308, _276) * _308) + _307.y)) + _307.zw;
    uint _805 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _756.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _756.x) * 2u;
    uvec4 _813 = texelFetch(ps1, int(_805 + 1u));
    uint _814 = _813.x;
    uint _829 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _830 = min(min(texelFetch(ps1, int(_805)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _832;
    _832 = ((_223 * _213) + ((((mix(_705 * _232, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_237 - (max(2.0 * _237, 0.4000000059604644775390625) * (1.0 - sqrt(_232))), -1.0) * 0.5) + 0.5, _628, _693), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _702, 0.0).xyz) * _253) * 1.0) + ((_705 * (((_222 * _283.x) + vec3(_267 * _283.y)) * (mix(min(_713 * _713, 2048.0), min(_716 * _716, 2048.0), _246) * ((_236 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _232))) + (((_363 * mix(1.0, min(dot(_223, vec3(0.300048828125, 0.58984375, 0.1099853515625)) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_622 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_222 * _316.x) + vec3(_267 * _316.y)));
    highp vec3 _833;
    SPIRV_CROSS_LOOP
    for (uint _835 = 0u; _835 < _830; _832 = _833, _835++)
    {
        uint _844 = texelFetch(ps2, int(_814 + _835)).x * 6u;
        highp vec4 _846 = texelFetch(ps0, int(_844));
        highp vec4 _848 = texelFetch(ps0, int(_844 + 1u));
        highp vec4 _850 = texelFetch(ps0, int(_844 + 2u));
        highp vec4 _852 = texelFetch(ps0, int(_844 + 3u));
        highp float _853 = _846.w;
        highp float _854 = _853 * _853;
        highp vec3 _855 = _846.xyz;
        highp vec3 _856 = in_var_TEXCOORD8.xyz - _855;
        if ((dot(_856, _856) * _854) > 1.0)
        {
            _833 = _832;
            continue;
        }
        uint _863 = floatBitsToUint(_850.w);
        if (((_863 >> 8u) & _829) == 0u)
        {
            _833 = _832;
            continue;
        }
        highp float _872 = _848.w;
        highp vec4 _887 = vec4(float((_863 & 1u) != 0u), float((_863 & 2u) != 0u), float((_863 & 4u) != 0u), float((_863 & 8u) != 0u));
        highp vec3 _888 = _855 - in_var_TEXCOORD8.xyz;
        highp float _889 = dot(_888, _888);
        highp vec3 _891 = _888 * inversesqrt(_889);
        highp float _908;
        if (_872 == 0.0)
        {
            highp float _900 = _889 * _854;
            highp float _903 = clamp(1.0 - (_900 * _900), 0.0, 1.0);
            _908 = (_903 * _903) * (1.0 / (_889 + 1.0));
        }
        else
        {
            highp vec3 _895 = _888 * _853;
            _908 = pow(1.0 - clamp(dot(_895, _895), 0.0, 1.0), _872);
        }
        highp float _919;
        if (((_863 >> 16u) & 3u) == 2u)
        {
            highp float _916 = clamp((dot(_891, _850.xyz) - _852.x) * _852.y, 0.0, 1.0);
            _919 = _908 * (_916 * _916);
        }
        else
        {
            _919 = _908;
        }
        highp vec3 _966;
        SPIRV_CROSS_BRANCH
        if (_919 > 0.0)
        {
            float _320 = mix(1.0, dot(vec4(1.0), _887), dot(_887, vec4(1.0)));
            highp float _927 = max(0.0, dot(_141, normalize(_515 + _891)));
            highp vec4 _929 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _681, 0.0);
            float _330 = _929.z;
            highp float _932 = max(clamp(_622 * (_929.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _334 = clamp(_622 * (_929.y * 2.0), 0.0, 1.0);
            float _321 = mix(_932, _334, _330);
            float _322 = dot(_141, _891);
            highp vec3 _944 = vec3(1.0) * max(0.0, dot(_141, _891));
            highp float _949 = 1.0 - (_927 * _927);
            float _337 = _932 * _932;
            highp float _950 = _927 * _337;
            highp float _952 = _337 / (_949 + (_950 * _950));
            float _341 = _334 * _334;
            highp float _953 = _927 * _341;
            highp float _955 = _341 / (_949 + (_953 * _953));
            vec4 _353 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _321) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _354 = _353.x;
            vec2 _362 = (vec2(-1.0400390625, 1.0400390625) * ((min(_354 * _354, _276) * _354) + _353.y)) + _353.zw;
            _966 = (((mix(_944 * _320, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_322 - (max(2.0 * _322, 0.4000000059604644775390625) * (1.0 - sqrt(_320))), -1.0) * 0.5) + 0.5, _628, _693), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _702, 0.0).xyz) * _253) * 1.0) + ((_944 * (((_222 * _362.x) + vec3(_267 * _362.y)) * (mix(min(_952 * _952, 2048.0), min(_955 * _955, 2048.0), _330) * ((_321 * 0.25) + 0.25)))) * 1.0)) * ((_848.xyz * _919) * _320);
        }
        else
        {
            _966 = vec3(0.0);
        }
        _833 = _832 + _966;
    }
    vec3 _69 = _832 * 1.0;
    vec4 _364 = vec4(_69.x, _69.y, _69.z, _483.w);
    _364.w = 0.0;
    highp vec3 _970 = min((_364.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_970.x, _970.y, _970.z, _364.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

