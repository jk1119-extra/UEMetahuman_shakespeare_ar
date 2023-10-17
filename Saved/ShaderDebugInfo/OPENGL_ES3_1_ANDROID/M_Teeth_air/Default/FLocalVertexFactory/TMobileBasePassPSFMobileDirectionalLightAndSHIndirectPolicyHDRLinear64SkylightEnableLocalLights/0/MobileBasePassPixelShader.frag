// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDirectionalLightAndSHIndirectPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_IndirectLightingCacheShowFlag(943,1),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: IndirectLightingCache(4): IndirectLightingCache_DirectionalLightShadowing(20,1),IndirectLightingCache_IndirectLightingSHCoefficients0(24,12),IndirectLightingCache_IndirectLightingSHCoefficients1(36,12),IndirectLightingCache_IndirectLightingSHCoefficients2(48,4)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:752-0:h:28:32,0:786-0:m:8:1,0:792-0:h:60:3,0:943-0:h:64:1,0:987-0:h:68:1,0:988-0:h:72:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:20-4:m:0:1,4:24-4:h:0:12,4:36-4:h:12:12,4:48-4:h:24:4,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[18])
#define View_bSubsurfacePostprocessEnabled (pc0_h[17].x)
#define View_IndirectLightingCacheShowFlag (pc0_h[16].x)
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
uniform highp vec4 pc0_h[19];


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


#define IndirectLightingCache_IndirectLightingSHCoefficients2 (pc4_h[6])
#define IndirectLightingCache_IndirectLightingSHCoefficients1(Offset) (pc4_h[3 + int(Offset)])
#define IndirectLightingCache_IndirectLightingSHCoefficients0(Offset) (pc4_h[0 + int(Offset)])
#define IndirectLightingCache_DirectionalLightShadowing (pc4_m[0].x)
uniform highp vec4 pc4_h[7];
uniform mediump vec4 pc4_m[1];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


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

vec4 _541;
vec3 _542;
vec3 _544;
vec4 _545;

void main()
{
    highp vec3 _579;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _579 = -View_ViewForward;
    }
    else
    {
        _579 = normalize(-in_var_TEXCOORD8.xyz);
    }
    uint _745;
    vec2 _180 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _590 = vec4(_180, sqrt(clamp(1.0 - dot(_180, _180), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _88 = _590.z + 1.0;
    vec2 _187 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _601 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _604 = _601.x * Material_PreshaderBuffer_1.w;
    vec3 _92 = vec4(_187, sqrt(clamp(1.0 - dot(_187, _187), 0.0, 1.0)), 1.0).xyz * vec3(_604, _604, 1.0);
    vec3 _97 = vec3(_590.xy, _88);
    vec3 _101 = vec3(_92.xy * vec2(-1.0), _92.z);
    vec3 _107 = (_97 * vec3(dot(_97, _101))) - (vec3(_88) * _101);
    float _109 = _107.z + 1.0;
    vec2 _194 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _617 = mix(vec3(0.0, 0.0, 1.0), vec4(_194, sqrt(clamp(1.0 - dot(_194, _194), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _117 = vec3(_107.xy, _109);
    vec3 _121 = vec3(_617.xy * vec2(-1.0), _617.z);
    vec3 _127 = (_117 * vec3(dot(_117, _121))) - (vec3(_109) * _121);
    float _129 = _127.z + 1.0;
    highp vec4 _621 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _201 = (_621.xy * vec2(2.0)) - vec2(1.0);
    highp float _624 = sqrt(clamp(1.0 - dot(_201, _201), 0.0, 1.0));
    vec3 _134 = vec3(_127.xy, _129);
    vec3 _137 = vec3(vec4(_201, _624, 1.0).xy * vec2(-1.0), _624);
    vec3 _144 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_134 * vec3(dot(_134, _137))) - (vec3(_129) * _137))) * 1.0;
    highp vec3 _629 = (-_579) + ((_144 * dot(_144, _579)) * 2.0);
    highp vec4 _633 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _640 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _644 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _145 = _633.xyz;
    highp vec4 _651 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _657 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _156 = _657.x;
    vec3 _158 = mix(mix(_145, _640.xyz * (_145 / _644.xyz), vec3(0.669921875)), (_651.xyz * (_145 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_156));
    highp vec4 _664 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _210 = _664.x;
    float _211 = _664.y;
    float _208 = _664.z;
    vec3 _167 = _601.xyz;
    vec3 _169 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _216 = clamp(mix(_158, _158 * vec3((_210 <= 0.0) ? 0.0 : pow(_210, 0.300048828125), (_211 <= 0.0) ? 0.0 : pow(_211, 0.300048828125), (_208 <= 0.0) ? 0.0 : pow(_208, 0.300048828125)), vec3(_156 * clamp(1.0 - ((1.0 - _657.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _167, vec3(0.0), vec3(1.0));
    float _217 = clamp((_167 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_579, _169)) * _169) * vec3(2.0)) - _579, _579)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _686 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _156), 0.0, 1.0));
    vec3 _220 = dFdx(_144);
    vec3 _221 = dFdy(_144);
    highp float _692 = clamp(pow(max(dot(_220, _220), dot(_221, _221)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _225 = vec3(0.07999999821186065673828125 * _217);
    float _233 = _144.y;
    vec4 _402 = _545;
    _402.y = (-0.48860299587249755859375) * _233;
    float _234 = _144.z;
    vec4 _403 = _402;
    _403.z = 0.48860299587249755859375 * _234;
    float _235 = _144.x;
    vec4 _404 = _403;
    _404.w = (-0.48860299587249755859375) * _235;
    vec3 _236 = _144 * _144;
    vec4 _405 = _541;
    _405.x = (1.09254801273345947265625 * _235) * _233;
    vec4 _406 = _405;
    _406.y = ((-1.09254801273345947265625) * _233) * _234;
    vec4 _407 = _406;
    _407.z = 0.3153919875621795654296875 * ((3.0 * _236.z) - 1.0);
    vec4 _408 = _407;
    _408.w = ((-1.09254801273345947265625) * _235) * _234;
    vec4 _409 = _404;
    _409.x = 0.885601043701171875;
    vec3 _229 = _409.yzw * 2.09375;
    vec4 _230 = vec4(_409.x, _229.x, _229.y, _229.z);
    vec4 _231 = _408 * 0.78515625;
    float _232 = (_236.x - _236.y) * 0.4289104640483856201171875;
    vec3 _410 = vec3(0.0);
    _410.x = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(0), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(0), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.x * _232);
    vec3 _411 = _410;
    _411.y = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(1), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(1), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.y * _232);
    vec3 _412 = _411;
    _412.z = (dot(IndirectLightingCache_IndirectLightingSHCoefficients0(2), _230) + dot(IndirectLightingCache_IndirectLightingSHCoefficients1(2), _231)) + (IndirectLightingCache_IndirectLightingSHCoefficients2.z * _232);
    vec3 _226 = max(vec3(0.0), _412);
    highp vec4 _728 = vec4(_144, 1.0);
    highp vec3 _732 = _542;
    _732.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _728);
    highp vec3 _736 = _732;
    _736.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _728);
    highp vec3 _740 = _736;
    _740.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _728);
    vec3 _257 = max(vec3(0.0), _740) * View_SkyLightColor.xyz;
    vec4 _400;
    do
    {
        _745 = Primitive_Flags;
        if (((_745 & 2u) != 0u) && (View_IndirectLightingCacheShowFlag > 0.0))
        {
            _400 = vec4(IndirectLightingCache_DirectionalLightShadowing, 1.0, 1.0, 1.0);
            break;
        }
        _400 = vec4(1.0);
        break;
    } while(false);
    highp vec4 _770 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _269 = mix(1.0, dot(_400, _770), dot(_770, vec4(1.0)));
    highp float _774 = max(0.0, dot(_144, normalize(_579 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _777 = uint(((vec4(_544.x, _544.y, _544.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _786 = (vec2(uvec2(5u, _777)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _788 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _786, 0.0);
    float _283 = _788.z;
    highp float _791 = max(clamp(_686 * (_788.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _287 = clamp(_686 * (_788.y * 2.0), 0.0, 1.0);
    float _273 = mix(_791, _287, _283);
    float _274 = dot(_144, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _798 = float(_777);
    highp vec2 _807 = (vec2(uvec2(0u, _777)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _810 = vec3(1.0) * max(0.0, dot(_144, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _290 = _216 * 0.318407952785491943359375;
    highp float _815 = 1.0 - (_774 * _774);
    float _291 = _791 * _791;
    highp float _816 = _774 * _291;
    highp float _818 = _291 / (_815 + (_816 * _816));
    float _295 = _287 * _287;
    highp float _819 = _774 * _295;
    highp float _821 = _295 / (_815 + (_819 * _819));
    vec4 _309 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _273) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _310 = _309.x;
    float _313 = exp2((-9.28125) * clamp(abs(dot(_144, _579)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _320 = (vec2(-1.0400390625, 1.0400390625) * ((min(_310 * _310, _313) * _310) + _309.y)) + _309.zw;
    float _304 = clamp(_217 * 4.0, 0.0, 1.0);
    highp vec2 _834 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _861 = uvec2(uint(_834.x), uint(_834.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _401;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _401 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _629, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_686, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _401 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _629, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_686, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _344 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _686) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _345 = _344.x;
    vec2 _353 = (vec2(-1.0400390625, 1.0400390625) * ((min(_345 * _345, _313) * _345) + _344.y)) + _344.zw;
    uint _910 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _861.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _861.x) * 2u;
    uvec4 _918 = texelFetch(ps1, int(_910 + 1u));
    uint _919 = _918.x;
    uint _932 = (uint((_745 & 1024u) != 0u) | (uint((_745 & 2048u) != 0u) << 1u)) | (uint((_745 & 4096u) != 0u) << 2u);
    uint _933 = min(min(texelFetch(ps1, int(_910)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _935;
    _935 = (((_226 + _257) * _216) + ((((mix(_810 * _269, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_274 - (max(2.0 * _274, 0.4000000059604644775390625) * (1.0 - sqrt(_269))), -1.0) * 0.5) + 0.5, _692, _798), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _807, 0.0).xyz) * _290) * 1.0) + ((_810 * (((_225 * _320.x) + vec3(_304 * _320.y)) * (mix(min(_818 * _818, 2048.0), min(_821 * _821, 2048.0), _283) * ((_273 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _269))) + (((_401 * mix(1.0, min((dot(_226, vec3(0.300048828125, 0.58984375, 0.1099853515625)) + dot(_257, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_686 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_225 * _353.x) + vec3(_304 * _353.y)));
    highp vec3 _936;
    SPIRV_CROSS_LOOP
    for (uint _938 = 0u; _938 < _933; _935 = _936, _938++)
    {
        uint _947 = texelFetch(ps2, int(_919 + _938)).x * 6u;
        highp vec4 _949 = texelFetch(ps0, int(_947));
        highp vec4 _951 = texelFetch(ps0, int(_947 + 1u));
        highp vec4 _953 = texelFetch(ps0, int(_947 + 2u));
        highp vec4 _955 = texelFetch(ps0, int(_947 + 3u));
        highp float _956 = _949.w;
        highp float _957 = _956 * _956;
        highp vec3 _958 = _949.xyz;
        highp vec3 _959 = in_var_TEXCOORD8.xyz - _958;
        if ((dot(_959, _959) * _957) > 1.0)
        {
            _936 = _935;
            continue;
        }
        uint _966 = floatBitsToUint(_953.w);
        if (((_966 >> 8u) & _932) == 0u)
        {
            _936 = _935;
            continue;
        }
        highp float _975 = _951.w;
        highp vec4 _990 = vec4(float((_966 & 1u) != 0u), float((_966 & 2u) != 0u), float((_966 & 4u) != 0u), float((_966 & 8u) != 0u));
        highp vec3 _991 = _958 - in_var_TEXCOORD8.xyz;
        highp float _992 = dot(_991, _991);
        highp vec3 _994 = _991 * inversesqrt(_992);
        highp float _1011;
        if (_975 == 0.0)
        {
            highp float _1003 = _992 * _957;
            highp float _1006 = clamp(1.0 - (_1003 * _1003), 0.0, 1.0);
            _1011 = (_1006 * _1006) * (1.0 / (_992 + 1.0));
        }
        else
        {
            highp vec3 _998 = _991 * _956;
            _1011 = pow(1.0 - clamp(dot(_998, _998), 0.0, 1.0), _975);
        }
        highp float _1022;
        if (((_966 >> 16u) & 3u) == 2u)
        {
            highp float _1019 = clamp((dot(_994, _953.xyz) - _955.x) * _955.y, 0.0, 1.0);
            _1022 = _1011 * (_1019 * _1019);
        }
        else
        {
            _1022 = _1011;
        }
        highp vec3 _1069;
        SPIRV_CROSS_BRANCH
        if (_1022 > 0.0)
        {
            float _357 = mix(1.0, dot(_400, _990), dot(_990, vec4(1.0)));
            highp float _1030 = max(0.0, dot(_144, normalize(_579 + _994)));
            highp vec4 _1032 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _786, 0.0);
            float _367 = _1032.z;
            highp float _1035 = max(clamp(_686 * (_1032.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _371 = clamp(_686 * (_1032.y * 2.0), 0.0, 1.0);
            float _358 = mix(_1035, _371, _367);
            float _359 = dot(_144, _994);
            highp vec3 _1047 = vec3(1.0) * max(0.0, dot(_144, _994));
            highp float _1052 = 1.0 - (_1030 * _1030);
            float _374 = _1035 * _1035;
            highp float _1053 = _1030 * _374;
            highp float _1055 = _374 / (_1052 + (_1053 * _1053));
            float _378 = _371 * _371;
            highp float _1056 = _1030 * _378;
            highp float _1058 = _378 / (_1052 + (_1056 * _1056));
            vec4 _390 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _358) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _391 = _390.x;
            vec2 _399 = (vec2(-1.0400390625, 1.0400390625) * ((min(_391 * _391, _313) * _391) + _390.y)) + _390.zw;
            _1069 = (((mix(_1047 * _357, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_359 - (max(2.0 * _359, 0.4000000059604644775390625) * (1.0 - sqrt(_357))), -1.0) * 0.5) + 0.5, _692, _798), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _807, 0.0).xyz) * _290) * 1.0) + ((_1047 * (((_225 * _399.x) + vec3(_304 * _399.y)) * (mix(min(_1055 * _1055, 2048.0), min(_1058 * _1058, 2048.0), _367) * ((_358 * 0.25) + 0.25)))) * 1.0)) * ((_951.xyz * _1022) * _357);
        }
        else
        {
            _1069 = vec3(0.0);
        }
        _936 = _935 + _1069;
    }
    vec3 _72 = _935 * 1.0;
    vec4 _413 = vec4(_72.x, _72.y, _72.z, _541.w);
    _413.w = 0.0;
    highp vec3 _1073 = min((_413.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1073.x, _1073.y, _1073.z, _413.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

